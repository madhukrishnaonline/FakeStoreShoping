import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-shopping-jewelery',
  templateUrl: './shopping-jewelery.component.html',
  styleUrls: ['./shopping-jewelery.component.css']
})
export class ShoppingJeweleryComponent implements OnInit {
  public jewelery: FakestoreProductContract[] = [];

  constructor(private fakestore: FakestoreServiceAPI, private cartService: ShoppingCartServiceService, private notifier: NotificationService) { }

  public ErrorText = null;
  public isFetching: boolean = false;
  public getProducts() {
    this.isFetching = true;
    this.fakestore.getSpecificProducts('jewelery').subscribe(data => {
      this.jewelery = data;
      this.isFetching = false;
    }, (error) => {
      this.ErrorText = error.statusText;
      this.isFetching = false;
    });
  }
  ngOnInit(): void {
    this.getProducts();
  }

  public CartItems: FakestoreProductContract[] = [];
  public Total: number = 0;
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
