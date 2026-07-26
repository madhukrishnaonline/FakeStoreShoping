import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-shopping-products',
  templateUrl: './shopping-products.component.html',
  styleUrls: ['./shopping-products.component.css']
})
export class ShoppingProductsComponent implements OnInit {
  public Products: FakestoreProductContract[] = [];
  ReverseOrder: FakestoreProductContract[] = [];
  indicators: number[] = [];

  index: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  constructor(private products: FakestoreServiceAPI, private route: ActivatedRoute, private cartService: ShoppingCartServiceService, private notifier: NotificationService) { }

  public ErrorText = null;
  public isFetching: boolean = false;
  public getProducts() {
    this.isFetching = true;
    this.products.getProducts().subscribe(data => {
      this.Products = data;
      this.isFetching = false;
      // this.products = data.map(product => ({
      //   ...product,
      //   quantity: 1 // Default quantity
      // }));
    }, (error) => {
      this.ErrorText = error.statusText + error.message;
      this.isFetching = false;
    });
  }

  ngOnInit(): void {
    this.getProducts();
    this.products.sortProducts().subscribe(data => {
      // this.ReverseOrder = data;
      this.ReverseOrder = data.map(product => ({
        ...product,
        quantity: 1 // Default quantity
      }));
      // build indicators for carousel (one intro slide + reverseOrder items)
      this.indicators = Array(this.ReverseOrder.length + 1).fill(0).map((_, i) => i);
    });
  }

  public AddToCart(id: number) {
    this.notifier.showSuccess("Product added to cart");
    this.cartService.addToCart(id);
  }//AddToCart

  className: string = " ";
  public WishListItems: FakestoreProductContract[] = [];
  public AddToWishList(id: number) {
    const added = this.cartService.addToWishList(id);
    if (added) this.notifier.showSuccess('Product added to wishlist');
    else this.notifier.showSuccess('Product removed from wishlist');
  }//AddToWishList

  public isInWishlist(id: number): boolean {
    const list = this.cartService.getWishListItems();
    return !!list.find(item => item.id === id);
  }

  public onCardKeydown(event: KeyboardEvent, product: FakestoreProductContract) {
    const key = event.key;
    if (key === 'Enter') {
      this.AddToCart(product.id);
      event.preventDefault();
    } else if (key.toLowerCase() === 'w') {
      this.AddToWishList(product.id);
      event.preventDefault();
    }
  }

  slideFade: boolean = false;
  stopSlideFade() {

  }

  trackByProductId(index: number, product: FakestoreProductContract) {
    return product && product.id ? product.id : index;
  }
}