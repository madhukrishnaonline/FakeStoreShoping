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

  }
  // Add To Cart
  public AddToCart(id: number) {
    this.notifier.showSuccess('Product added to cart');
    this.cartService.addToCart(id);
  }

}
