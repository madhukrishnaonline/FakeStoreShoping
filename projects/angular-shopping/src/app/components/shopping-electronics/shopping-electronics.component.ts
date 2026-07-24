import { Component, OnInit } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-electronics',
  templateUrl: './shopping-electronics.component.html',
  styleUrls: ['./shopping-electronics.component.css']
})
export class ShoppingElectronicsComponent implements OnInit {
  public electronics: FakestoreProductContract[] = [];

  constructor(private fakestore: FakestoreServiceAPI, private cartService: ShoppingCartServiceService) {

  }

  public CartItems: FakestoreProductContract[] = [];
  public Total: number = 0;

  public ErrorText = null;
  public isFetching: boolean = false;
  public getProduct() {
    this.isFetching = true;
    this.fakestore.getSpecificProducts('electronics').subscribe(data => {
      this.electronics = data;
      this.isFetching = false;
    }, (error) => {
      this.ErrorText = error.statusText;
      this.isFetching = false;
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  public AddToCart(id: number) {
    alert(id + " Product Added to Cart");
    this.cartService.addToCart(id);
  }

  public WishListItems:FakestoreProductContract[] = [];
  public AddToWishList(id:number)
  {
    alert("Product Added to WishList "+id);
    this.cartService.addToWishList(id);
  }//AddToWishList
}
