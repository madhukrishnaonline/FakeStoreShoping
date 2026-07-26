import { Component, OnInit } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ROUTES } from '../../ROUTES';

@Component({
  selector: 'app-shopping-filters',
  templateUrl: './shopping-filters.component.html',
  styleUrls: ['./shopping-filters.component.css']
})
export class ShoppingFiltersComponent  implements OnInit
{
  public Categories: string[] =[];
  public ROUTES = ROUTES;

  constructor(private categories: FakestoreServiceAPI){ }

  ngOnInit(): void 
  {    
    
  }

}
