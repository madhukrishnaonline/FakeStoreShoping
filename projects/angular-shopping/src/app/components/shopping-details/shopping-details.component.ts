import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit {
  public product: FakestoreProductContract = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 },
    quantity: 1
  }

  public id: any;

  constructor(private route: ActivatedRoute, private fakestore: FakestoreServiceAPI, private cartService: ShoppingCartServiceService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

  public ErrorText = null;
  public isFetching: boolean = true;
  public getProduct() {
    this.fakestore.getProductId(this.id).subscribe(data => {
      this.product = data
      this.isFetching = false;
    }, (error) => {
      this.ErrorText = error.statusText;
      this.isFetching = false;
    });
  }

  public AddToCart(id: number) {
    alert(id + " Product Added to Cart");
    this.cartService.addToCart(id);
  }

  public WishListItems: FakestoreProductContract[] = [];
  public AddToWishList(id: number) {
    alert("Product Added to WishList " + id);
    this.cartService.addToWishList(id);
  }//AddToWishList

  purchaseSuccess:boolean=false;
  public BuyNow(){
    this.purchaseSuccess=true;
  }
}
