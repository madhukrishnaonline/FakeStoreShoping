import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-shopping-sort-desc',
  templateUrl: './shopping-sort-desc.component.html',
  styleUrls: ['./shopping-sort-desc.component.css']
})
export class ShoppingSortDescComponent implements OnInit {
  constructor(private categories: FakestoreServiceAPI, private cartService: ShoppingCartServiceService, private notifier: NotificationService) {

  }

  ngOnInit(): void {
    this.sortProducts();
  }

  public sortedProducts: FakestoreProductContract[] = [];
  public ErrorText = null;
  public isFetching: boolean = true;
  public sortProducts() {
    this.categories.sortProducts().subscribe(data => {
      this.sortedProducts = data
      this.isFetching = false;
    }, (error) => {
      this.ErrorText = error.statusText;
      this.isFetching = false;
    });
  }

  public AddToCart(id: number) {
    this.notifier.showSuccess('Product added to cart');
    this.cartService.addToCart(id);
  }

  public WishListItems: FakestoreProductContract[] = [];
  public AddToWishList(id: number) {
    const added = this.cartService.addToWishList(id);
    if (added) this.notifier.showSuccess('Product added to wishlist');
    else this.notifier.showSuccess('Product removed from wishlist');
  }//AddToWishList

  trackByProductId(index: number, product: FakestoreProductContract) {
    return product && product.id ? product.id : index;
  }

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
}
