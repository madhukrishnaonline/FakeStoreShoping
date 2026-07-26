import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { Router } from '@angular/router';
import { NotificationService } from '../Services/notification.service';
import { ROUTES } from '../../ROUTES';

@Component({
  selector: 'app-shopping-womens-clothing',
  templateUrl: './shopping-womens-clothing.component.html',
  styleUrls: ['./shopping-womens-clothing.component.css']
})
export class ShoppingWomensClothingComponent implements OnInit {
  public ROUTES = ROUTES;
  public womensClothing: FakestoreProductContract[] = [];

  constructor(private fakestore: FakestoreServiceAPI, private cartService: ShoppingCartServiceService, private notifier: NotificationService, private router: Router) { }

  public ErrorText = null;
  public isFetching: boolean = false;
  public getProduct() {
    this.isFetching = true;
    this.fakestore.getSpecificProducts('women\'s clothing').subscribe(data => {
      this.womensClothing = data
      this.isFetching = false;
    }, (error) => {
      this.ErrorText = error.statusText;
      this.isFetching = false;
    });
  }
  ngOnInit(): void {
    this.getProduct();
  }

  trackByProductId(index: number, product: FakestoreProductContract) {
    return product && product.id ? product.id : index;
  }

  public isInWishlist(id: number): boolean {
    const list = this.cartService.getWishListItems();
    return !!list.find(item => item.id === id);
  }

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
