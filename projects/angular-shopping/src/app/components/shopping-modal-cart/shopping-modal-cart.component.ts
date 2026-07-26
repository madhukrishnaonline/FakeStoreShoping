import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from '../Services/shopping-cart-service.service';
import { FakestoreProductContract } from '../Contracts/FakestoreProductContract';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-shopping-modal-cart',
  templateUrl: './shopping-modal-cart.component.html',
  styleUrls: ['./shopping-modal-cart.component.css']
})
export class ShoppingModalCartComponent implements OnInit {

  constructor(private cartService: ShoppingCartServiceService, private notifier: NotificationService) { }

  CartItems: FakestoreProductContract[] = [];

  ngOnInit(): void {
    this.CartItems = this.cartService.getCartItems();
  }

  trackByProductId(index: number, product: FakestoreProductContract) {
    return product && product.id ? product.id : index;
  }

  get calculateTotal() {
    return this.CartItems.reduce<number>((prev, product) => prev + (product.price * product.quantity), 0);
  }

  // Remove Cart Item
  public RemoveClick(id: number) {
    this.notifier.showSuccess('Product removed from cart');
    this.CartItems.splice(id, 1);
  }

  public RemoveAll() {
    this.CartItems.splice(0, this.CartItems.length);
  }

  width: number = 5;
  productPrice: number = 0;
  public Quantity(e: any) {
    const target = e.target as HTMLElement;
    const productId = target.getAttribute("data-id");
    const product = this.CartItems.find(product => product.id.toString() === productId);
    // console.log(product);
    if (product) {
      if (e.target.value == "max") {
        product.quantity += 1;
      }//if
      else if (e.target.value == "min" && product.quantity > 1) {
        product.quantity -= 1;
      }//else if
    }
  }

  purchaseSuccess: boolean = false;
  placedItems: FakestoreProductContract[] = [];
  Total: number = 0;
  public PlaceOrder() {
    if (this.CartItems.length === 0) {
      this.notifier.showError('Cannot place empty order!');
      return;
    }
    this.purchaseSuccess = true;
    this.placedItems = this.CartItems.map(item => ({ ...item }));
    this.CartItems.splice(0, this.CartItems.length);
    this.Total = this.placedItems.reduce<number>((prev, product) => prev + (product.price * product.quantity), 0);
  }

}
