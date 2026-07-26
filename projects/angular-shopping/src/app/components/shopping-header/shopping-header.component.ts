import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ROUTES } from '../../ROUTES';


@Component({
  selector: 'app-shopping-header',
  templateUrl: './shopping-header.component.html',
  styleUrls: ['./shopping-header.component.css']
})
export class ShoppingHeaderComponent implements OnInit {

  public ROUTES = ROUTES;

  private wishSub?: Subscription;

  constructor(private cartService: ShoppingCartServiceService, private builder: FormBuilder, private fakestore: FakestoreServiceAPI) { }

  CartItems: FakestoreProductContract[] = [];

  SearchProduct = new FormControl('', Validators.required);

  WishListItems: FakestoreProductContract[] = [];

  products: string[] = [
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "Mens Casual Premium Slim Fit T-Shirts",
    "Mens Cotton Jacket",
    "Mens Casual Slim Fit",
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "Solid Gold Petite Micropave",
    "White Gold Plated Princess",
    "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "MBJ Women's Solid Short Sleeve Boat Neck V",
    "Opna Women's Short Sleeve Moisture",
    "DANVOUY Womens T Shirt Casual Cotton Short"
  ];

  filteredProducts!: Observable<string[]>;

  ngOnInit(): void {
    this.CartItems = this.cartService.getCartItems();

    this.wishSub = this.cartService.getWishListObservable().subscribe(list => {
      this.WishListItems = list;
    });

    this.filteredProducts = this.SearchProduct.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngOnDestroy(): void {
    this.wishSub?.unsubscribe();
  }

  trackByProduct(index: number, product: string) {
    return product;
  }


  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.products.filter(product => this._normalizeValue(product).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  public id: number = 0;
  public Search() {
    switch (this.SearchProduct.value) {
      case "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops":
        this.id = 1;
        break;
      case "Mens Casual Premium Slim Fit T-Shirts":
        this.id = 2;
        break;
      case "Mens Cotton Jacket":
        this.id = 3;
        break;
      case "Mens Casual Slim Fit":
        this.id = 4;
        break;
      case "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet":
        this.id = 5;
        break;
      case "Solid Gold Petite Micropave":
        this.id = 6;
        break;
      case "White Gold Plated Princess":
        this.id = 7;
        break;
      case "Pierced Owl Rose Gold Plated Stainless Steel Double":
        this.id = 8;
        break;
      case "WD 2TB Elements Portable External Hard Drive - USB 3.0":
        this.id = 9;
        break;
      case "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s":
        this.id = 10;
        break;
      case "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5":
        this.id = 11;
        break;
      case "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive":
        this.id = 12;
        break;
      case "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin":
        this.id = 13;
        break;
      case "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED":
        this.id = 14;
        break;
      case "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats":
        this.id = 15;
        break;
      case "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket":
        this.id = 16;
        break;
      case "Rain Jacket Women Windbreaker Striped Climbing Raincoats":
        this.id = 17;
        break;
      case "MBJ Women's Solid Short Sleeve Boat Neck V":
        this.id = 18;
        break;
      case "Opna Women's Short Sleeve Moisture":
        this.id = 19;
        break;
      case "DANVOUY Womens T Shirt Casual Cotton Short":
        this.id = 20;
        break;
      default:
        this.id = 0;
        break;
    }//switch
    if (this.id != 0) {
      this.cartService.AddToSearchResults(this.id);
    }//if
    else {

    }//else
  }//addtoSearchProducts
}

// products: FakestoreSearchResultsContract[] = [
//   {id:1,title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'},
//   {id:2,title:'Mens Casual Premium Slim Fit T-Shirts'},
//   {id:3,title:'Mens Cotton Jacket'},
//   {id:4,title:'Mens Casual Slim Fit'},
//   {id:5,title:'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet'},
//   {id:6,title:'Solid Gold Petite Micropave'},
//   {id:7,title:'White Gold Plated Princess'},
//   {id:8,title:'Pierced Owl Rose Gold Plated Stainless Steel Double'},
//   {id:9,title:'WD 2TB Elements Portable External Hard Drive - USB 3.0'},
//   {id:10,title:'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s'},
//   {id:11,title:'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5'},
//   {id:12,title:'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive'},
//   {id:13,title:'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin'},
//   {id:14,title:'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED'},
//   {id:15,title:'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats'},
//   {id:16,title:'Lock and Love Women\'s Removable Hooded Faux Leather Moto Biker Jacket'},
//   {id:17,title:'Rain Jacket Women Windbreaker Striped Climbing Raincoats'},
//   {id:18,title:'MBJ Women\'s Solid Short Sleeve Boat Neck V'},
//   {id:19,title:'Opna Women\'s Short Sleeve Moisture'},
//   {id:20,title:'DANVOUY Womens T Shirt Casual Cotton Short'}
// ];