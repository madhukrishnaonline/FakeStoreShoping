import { Injectable } from '@angular/core';
import { FakestoreServiceAPI } from './service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  constructor(private service: FakestoreServiceAPI) { }

  public CartItems: FakestoreProductContract[] = [];
  public SameCartItemsLength: number = 1;
  public Total: number = 0;
  WishListItems: FakestoreProductContract[] = [];
  private wishListSubject: BehaviorSubject<FakestoreProductContract[]> = new BehaviorSubject<FakestoreProductContract[]>(this.WishListItems);

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


  addToWishList(id: number): boolean {
    const alreadyIndex = this.WishListItems.findIndex(p => p.id === id);
    if (alreadyIndex !== -1) {
      // remove if already present (toggle off)
      this.WishListItems.splice(alreadyIndex, 1);
      this.wishListSubject.next([...this.WishListItems]);
      return false;
    }
    // add a typed optimistic placeholder immediately so UI can update
    const placeholder: Partial<FakestoreProductContract> = { id };
    this.WishListItems.unshift(placeholder as FakestoreProductContract);
    this.wishListSubject.next([...this.WishListItems]);
    this.service.getProductId(id).subscribe(data => {
      // replace placeholder (id-only) with full data
      this.WishListItems = [data, ...this.WishListItems.filter(p => p.id !== data.id)];
      this.wishListSubject.next([...this.WishListItems]);
    }, (error) => {
      this.ErrorText = error.statusText + error.message;
      this.isFetching = false;
    });
    return true;
  }

  getWishListItems() {
    return this.WishListItems;
  }

  getWishListObservable(): Observable<FakestoreProductContract[]> {
    return this.wishListSubject.asObservable();
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