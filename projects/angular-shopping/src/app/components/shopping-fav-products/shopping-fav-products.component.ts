import { ShoppingCartServiceService } from './../Services/shopping-cart-service.service';
import { FakestoreServiceAPI } from './../Services/service.fakestoreapi';
import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-shopping-fav-products',
  templateUrl: './shopping-fav-products.component.html',
  styleUrls: ['./shopping-fav-products.component.css']
})
export class ShoppingFavProductsComponent implements OnInit {
  public Products: FakestoreProductContract[] = [];

  constructor(private products: FakestoreServiceAPI, private route: ActivatedRoute, private cartService: ShoppingCartServiceService, private notifier: NotificationService) { }

  public ErrorText = null;
  public isFetching: boolean = false;

  public getWishListProducts() {
    this.isFetching = true;
    this.Products = this.cartService.getWishListItems();
    this.isFetching = false;
  }
  ngOnInit(): void {
    this.getWishListProducts();
    this.route.snapshot.paramMap.get("id");
  }

  public AddToCart(id: number) {
    this.notifier.showSuccess('Product added to cart');
    this.cartService.addToCart(id);
  }//AddToCart

  public UnList(id: number) {
    this.Products.pop();
  }

}
