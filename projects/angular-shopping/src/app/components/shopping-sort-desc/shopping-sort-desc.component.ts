import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-sort-desc',
  templateUrl: './shopping-sort-desc.component.html',
  styleUrls: ['./shopping-sort-desc.component.css']
})
export class ShoppingSortDescComponent implements OnInit {
  constructor(private categories: FakestoreServiceAPI,private cartService:ShoppingCartServiceService) {

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
    alert(id+" Product Added to Cart");
    this.cartService.addToCart(id);
  }

  public WishListItems:FakestoreProductContract[] = [];
  public AddToWishList(id:number)
  {
    alert("Product Added to WishList "+id);
    this.cartService.addToWishList(id);
  }//AddToWishList
}
