import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { Router } from '@angular/router';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { NotificationService } from '../Services/notification.service';
import { ROUTES } from '../../ROUTES';

@Component({
  selector: 'app-shopping-products',
  templateUrl: './shopping-products.component.html',
  styleUrls: ['./shopping-products.component.css']
})
export class ShoppingProductsComponent implements OnInit {
  public ROUTES = ROUTES;
  public Products: FakestoreProductContract[] = [];

  constructor(private products: FakestoreServiceAPI, private cartService: ShoppingCartServiceService, private notifier: NotificationService, private router: Router) { }

  public ErrorText = null;
  public isFetching: boolean = false;
  public getProducts() {
    this.isFetching = true;
    this.products.getProducts().subscribe(data => {
      this.Products = data;
      this.isFetching = false;
    }, (error) => {
      this.ErrorText = error.statusText + error.message;
      this.isFetching = false;
    });
  }

  ngOnInit(): void {
    this.getProducts();
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
      this.router.navigate([ROUTES.DETAILS, product.id, product.title]);
      event.preventDefault();
    } else if (key.toLowerCase() === 'w') {
      this.AddToWishList(product.id);
      event.preventDefault();
    }
  }

  trackByProductId(index: number, product: FakestoreProductContract) {
    return product && product.id ? product.id : index;
  }
}