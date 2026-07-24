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
    this.notifier.showSuccess('Product added to wishlist');
    this.cartService.addToWishList(id);
  }//AddToWishList
}
