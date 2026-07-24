import { Component } from '@angular/core';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';

@Component({
  selector: 'app-shopping-all-products',
  templateUrl: './shopping-all-products.component.html',
  styleUrls: ['./shopping-all-products.component.css']
})
export class ShoppingAllProductsComponent
{
  public CartItems:FakestoreProductContract[] = [];
}
