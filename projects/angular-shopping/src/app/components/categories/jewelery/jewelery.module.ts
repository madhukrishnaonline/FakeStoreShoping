import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingJeweleryComponent } from '../../shopping-jewelery/shopping-jewelery.component';

@NgModule({
  declarations: [ShoppingJeweleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShoppingJeweleryComponent }
    ])
  ]
})
export class JeweleryModule { }
