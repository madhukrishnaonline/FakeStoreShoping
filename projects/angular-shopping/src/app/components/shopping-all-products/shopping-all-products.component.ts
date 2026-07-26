import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ROUTES } from '../../ROUTES';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';


@Component({
  selector: 'app-shopping-all-products',
  templateUrl: './shopping-all-products.component.html',
  styleUrls: ['./shopping-all-products.component.css']
})
export class ShoppingAllProductsComponent implements OnInit {
  public CartItems: FakestoreProductContract[] = [];
  public isFetching: boolean = false;
  public ErrorText: string | null = null;

  public showCarousel: boolean = true;
  public ROUTES = ROUTES;

  ReverseOrder: FakestoreProductContract[] = [];
  indicators: number[] = [];

  constructor(private products: FakestoreServiceAPI, private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      const url = (e as NavigationEnd).urlAfterRedirects || (e as NavigationEnd).url;
      const path = url.toLowerCase();
      const detailsSeg = '/' + ROUTES.DETAILS.toLowerCase();
      const wishlistSeg = '/' + ROUTES.WISHLIST.toLowerCase();
      const limitedSeg = '/' + ROUTES.LIMITED.toLowerCase();
      const loginSeg = '/' + ROUTES.LOGIN.toLowerCase();
      const addProductSeg = '/' + ROUTES.ADD_PRODUCT.toLowerCase();
      this.showCarousel = !(path.startsWith(detailsSeg) || path.startsWith(wishlistSeg) || path.startsWith(limitedSeg) || path.includes(limitedSeg + '/') || path.startsWith(loginSeg) || path.startsWith(addProductSeg));
    });
    // initialize based on current url
    const cur = (this.router.url || '').toLowerCase();
    const detailsSeg = '/' + ROUTES.DETAILS.toLowerCase();
    const wishlistSeg = '/' + ROUTES.WISHLIST.toLowerCase();
    const limitedSeg = '/' + ROUTES.LIMITED.toLowerCase();
    const loginSeg = '/' + ROUTES.LOGIN.toLowerCase();
    const addProductSeg = '/' + ROUTES.ADD_PRODUCT.toLowerCase();
    this.showCarousel = !(cur.startsWith(detailsSeg) || cur.startsWith(wishlistSeg) || cur.startsWith(limitedSeg) || cur.includes(limitedSeg + '/') || cur.startsWith(loginSeg) || cur.startsWith(addProductSeg));
  }

  ngOnInit(): void {
    this.products.sortProducts().subscribe(data => {
      this.ReverseOrder = data.map(product => ({
        ...product,
        quantity: 1
      }));
      this.indicators = Array(this.ReverseOrder.length + 1).fill(0).map((_, i) => i);
    });
  }
}
