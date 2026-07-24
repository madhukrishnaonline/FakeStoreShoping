import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-products',
  templateUrl: './shopping-products.component.html',
  styleUrls: ['./shopping-products.component.css']
})
export class ShoppingProductsComponent implements OnInit
 {
  public Products: FakestoreProductContract[] = [];
  ReverseOrder:FakestoreProductContract[]=[];

  index:number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  constructor(private products: FakestoreServiceAPI, private route:ActivatedRoute, private cartService:ShoppingCartServiceService) { }

  public ErrorText = null;
  public isFetching:boolean = false;
  public getProducts()
  {
    this.isFetching = true;
    this.products.getProducts().subscribe(data=>{
      this.Products = data;
      this.isFetching = false;
      // this.products = data.map(product => ({
      //   ...product,
      //   quantity: 1 // Default quantity
      // }));
    },(error)=>{
      this.ErrorText = error.statusText + error.message;
      this.isFetching = false;
    });
  }

  ngOnInit(): void 
  {
    this.getProducts();
    this.products.sortProducts().subscribe(data=>{
      // this.ReverseOrder = data;
      this.ReverseOrder = data.map(product => ({
        ...product,
        quantity: 1 // Default quantity
      }));
    });
    this.route.snapshot.paramMap.get("id");
  }

  public AddToCart(id:number)
  {
    alert("Product Added to Cart "+id);
    this.cartService.addToCart(id);
  }//AddToCart
  
  className:string = " ";
  public WishListItems:FakestoreProductContract[] = [];
  public AddToWishList(id:number)
  {
    alert("Product Added to WishList "+id);
    this.cartService.addToWishList(id);
  }//AddToWishList

  slideFade:boolean = false;
  stopSlideFade()
  {
    
  }
}