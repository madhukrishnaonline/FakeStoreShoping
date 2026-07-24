import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-mens-clothing',
  templateUrl: './shopping-mens-clothing.component.html',
  styleUrls: ['./shopping-mens-clothing.component.css']
})
export class ShoppingMensClothingComponent implements OnInit
{

  public mensClothing:FakestoreProductContract[] = [];

  constructor(private fakestore:FakestoreServiceAPI, private cartService:ShoppingCartServiceService){

  }

  public ErrorText = null;
  public isFetching:boolean = false;
  public getProduct()
  {
    this.isFetching = true;
    this.fakestore.getSpecificProducts('men\'s clothing').subscribe(data=>{
      this.mensClothing = data;
      this.isFetching = false;
    },(error)=>{
      this.ErrorText = error.statusText;
      this.isFetching = false;
    });
  }
  ngOnInit(): void {
      this.getProduct();
  }

  public CartItems:FakestoreProductContract[] = [];
  public Total:number = 0;
  public AddToCart(id:number)
  {
    alert(id+" Product Added to Cart");
    this.cartService.addToCart(id);
  }//AddToCart


  public WishListItems:FakestoreProductContract[] = [];
  public AddToWishList(id:number)
  {
    alert("Product Added to WishList "+id);
    this.cartService.addToWishList(id);
  }//AddToWishList
}
