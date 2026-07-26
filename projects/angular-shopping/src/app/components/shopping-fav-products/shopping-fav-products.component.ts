import { ShoppingCartServiceService } from './../Services/shopping-cart-service.service';
import { FakestoreServiceAPI } from './../Services/service.fakestoreapi';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../Services/notification.service';
import { ROUTES } from '../../ROUTES';

@Component({
  selector: 'app-shopping-fav-products',
  templateUrl: './shopping-fav-products.component.html',
  styleUrls: ['./shopping-fav-products.component.css']
})
export class ShoppingFavProductsComponent implements OnInit {
  public ROUTES = ROUTES;
  public Products: FakestoreProductContract[] = [];
  private wishSub?: Subscription;

  constructor(private products: FakestoreServiceAPI, private route: ActivatedRoute, private cartService: ShoppingCartServiceService, private notifier: NotificationService, private router: Router) { }

  public ErrorText = null;
  public isFetching: boolean = false;

  public getWishListProducts() {
    this.isFetching = true;
    this.Products = this.cartService.getWishListItems();
    this.isFetching = false;
  }
  ngOnInit(): void {
    this.isFetching = true;
    this.wishSub = this.cartService.getWishListObservable().subscribe(list => {
      this.Products = list;
      this.isFetching = false;
    });
  }

  ngOnDestroy(): void {
    this.wishSub?.unsubscribe();
  }

  trackByProductId(index: number, product: FakestoreProductContract) {
    return product && product.id ? product.id : index;
  }

  public AddToCart(id: number) {
    this.notifier.showSuccess('Product added to cart');
    this.cartService.addToCart(id);
  }//AddToCart

  public UnList(id: number) {
    const removed = this.cartService.addToWishList(id); // toggles off
    if (!removed) {
      this.notifier.showSuccess('Removed from wishlist');
    }
  }

  public onCardKeydown(event: KeyboardEvent, product: FakestoreProductContract) {
    const key = event.key;
    if (key === 'Enter') {
      this.router.navigate(['/', ROUTES.DETAILS, product.id, product.title]);
      event.preventDefault();
    } else if (key.toLowerCase() === 'w' || key.toLowerCase() === 'r') {
      this.UnList(product.id);
      event.preventDefault();
    }
  }

}
