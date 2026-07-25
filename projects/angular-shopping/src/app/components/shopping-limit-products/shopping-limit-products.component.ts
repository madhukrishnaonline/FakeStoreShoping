import { Component, OnInit } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-shopping-limit-products',
  templateUrl: './shopping-limit-products.component.html',
  styleUrls: ['./shopping-limit-products.component.css']
})
export class ShoppingLimitProductsComponent implements OnInit {
  constructor(private product: FakestoreServiceAPI, private cartService: ShoppingCartServiceService, private notifier: NotificationService) {

  }

  public ProductId: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  ngOnInit(): void {
    // this.GetProduct();
  }
  public Product: any

  public ErrorText = null;
  public isFetching: boolean = false;
  public GetProduct(e: any) {
    this.Product = null;
    this.isFetching = true;
    this.product.limitProducts(e.target.value).subscribe(data => {
      this.Product = data;
      this.isFetching = false;
    }, (error) => {
      this.ErrorText = error.statusText;
      this.isFetching = false;
    })
  }//getProduct()

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
