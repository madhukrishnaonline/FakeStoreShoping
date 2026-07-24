import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-shopping-search-results',
  templateUrl: './shopping-search-results.component.html',
  styleUrls: ['./shopping-search-results.component.css']
})
export class ShoppingSearchResultsComponent implements OnInit {

  constructor(private cartService: ShoppingCartServiceService, private notifier: NotificationService) { }

  public product: FakestoreProductContract[] | null = [];
  public TotalPrice: number = 0;

  notFound: string = '';
  ngOnInit(): void {
    this.product = this.cartService.getSearchedProduct();
    this.product.filter(item => item.id == 0).forEach(() => this.notFound = "Not Found....");
    // console.log(this.product.map(data => data.title));
  }

  public AddToWishList(id: number) {
    const added = this.cartService.addToWishList(id);
    if (added) this.notifier.showSuccess('Product added to wishlist');
    else this.notifier.showSuccess('Product removed from wishlist');
  }

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
      this.AddToCart(product.id);
      event.preventDefault();
    } else if (key.toLowerCase() === 'w') {
      this.AddToWishList(product.id);
      event.preventDefault();
    }
  }
  // Add To Cart
  public AddToCart(id: number) {
    this.notifier.showSuccess('Product added to cart');
    this.cartService.addToCart(id);
  }

}
