import { Injectable } from '@angular/core';
import { FakestoreServiceAPI } from './service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  constructor(private service: FakestoreServiceAPI) { }

  public CartItems: FakestoreProductContract[] = [];
  public SameCartItemsLength: number = 1;
  public Total: number = 0;
  WishListItems: FakestoreProductContract[] = [];

  public ErrorText = null;
  public isFetching: boolean = false;


  getCartItems() {
    return this.CartItems;
  }
  getTotal() {
    return this.Total;
  }
  getSameCartItemsLength() {
    return this.SameCartItemsLength;
  }

  addToCart(id: number) {
    this.service.getProductId(id).subscribe(data => {
      const existingProduct = this.CartItems.find(product => product.id === data.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const productWithQuantity = {
          ...data,
          quantity: 1
        };
        this.CartItems.unshift(productWithQuantity);
      }
      // console.log(this.CartItems);
      this.Total = this.CartItems.reduce<number>((prev, product) => prev + (product.price * product.quantity), 0);
    });
  }


  addToWishList(id: number) {
    this.service.getProductId(id).subscribe(data => {
      this.WishListItems.unshift(data);
    }, (error) => {
      this.ErrorText = error.statusText + error.message;
      this.isFetching = false;
    });
  }

  getWishListItems() {
    return this.WishListItems;
  }

  product: FakestoreProductContract[] = [];
  public AddToSearchResults(id: number) {
    this.service.getProductId(id).subscribe(data => {
      this.product.unshift(data);
    });
  }

  public getSearchedProduct() {
    return this.product;
  }


}