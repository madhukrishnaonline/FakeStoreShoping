import { Component, OnInit } from '@angular/core';
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

  ReverseOrder: FakestoreProductContract[] = [];
  indicators: number[] = [];

  constructor(private products: FakestoreServiceAPI) {}

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
