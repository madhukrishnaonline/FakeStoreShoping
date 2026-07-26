import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingJeweleryComponent } from '../../shopping-jewelery/shopping-jewelery.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ShoppingJeweleryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShoppingJeweleryComponent }
    ])
  ]
})
export class JeweleryModule { }
