import { Component, OnInit } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceComponent } from '../Services/service.auth';
import { Router } from '@angular/router';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-add-product',
  templateUrl: './shopping-add-product.component.html',
  styleUrls: ['./shopping-add-product.component.css']
})
export class ShoppingAddProductComponent implements OnInit {
  constructor(private fakestore: FakestoreServiceAPI, private fb: FormBuilder, private auth: AuthServiceComponent, private router: Router,
    private cartService: ShoppingCartServiceService) { }

  ngOnInit(): void {

  }

  public Product: FakestoreProductContract | any = null;

  public frmRegister = this.fb.group({
    title: this.fb.control('', Validators['required']),
    price: this.fb.control('', Validators['required']),
    description: this.fb.control('', Validators['required']),
    image: this.fb.control('', Validators['required']),
    category: this.fb.control('', Validators['required'])
  });

  get title() {
    return this.frmRegister.get("title");
  }
  get description() {
    return this.frmRegister.get("description");
  }
  get price() {
    return this.frmRegister.get("price");
  }
  get image() {
    return this.frmRegister.get("image");
  }
  get category() {
    return this.frmRegister.get("category");
  }

  public ErrorText = null;
  public isFetching: boolean = false;
  public SubmitClick() {
    this.isFetching = true;
    // alert(JSON.stringify(this.frmRegister.value)+" Product Added");
    const fv = this.frmRegister.value;
    const payload: Partial<FakestoreProductContract> = {
      title: fv.title ?? '',
      price: Number(fv.price) || 0,
      description: fv.description ?? '',
      image: fv.image ?? '',
      category: fv.category ?? '',
      quantity: 1
    };

    this.fakestore.addProduct(payload).subscribe(data => {
      this.Product = data;
      this.cartService.addToCart(this.Product.id);
      this.isFetching = false;
    }, (error) => {
      this.ErrorText = error.statusText;
      this.isFetching = false;
    });
    this.frmRegister.reset();
  }

  public Logout() {
    this.auth.logout();
    this.router.navigate(['login/user']);
  }
}
