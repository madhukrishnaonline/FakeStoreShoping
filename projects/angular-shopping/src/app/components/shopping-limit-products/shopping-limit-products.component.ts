import { Component, OnInit } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { Router } from '@angular/router';
import { NotificationService } from '../Services/notification.service';
import { ROUTES } from '../../ROUTES';

@Component({
  selector: 'app-shopping-limit-products',
  templateUrl: './shopping-limit-products.component.html',
  styleUrls: ['./shopping-limit-products.component.css']
})
export class ShoppingLimitProductsComponent implements OnInit {
  public ROUTES = ROUTES;
  constructor(private product: FakestoreServiceAPI, private cartService: ShoppingCartServiceService, private notifier: NotificationService, private router: Router) {

  }

  public ProductId: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  ngOnInit(): void {
    // this.GetProduct();
  }
  public Product: any
  public limitedProducts: FakestoreProductContract[] = [];

  public ErrorText = null;
  public isFetching: boolean = false;
  public GetProduct(e: any) {
    this.Product = null;
    this.isFetching = true;
    this.product.limitProducts(e.target.value).subscribe(data => {
      this.Product = data;
      this.limitedProducts = data;
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
      this.router.navigate(['/', ROUTES.DETAILS, product.id, product.title]);
      event.preventDefault();
    } else if (key.toLowerCase() === 'w') {
      this.AddToWishList(product.id);
      event.preventDefault();
    }
  }
}
