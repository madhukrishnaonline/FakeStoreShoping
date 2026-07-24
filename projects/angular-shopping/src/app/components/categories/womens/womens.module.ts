import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingWomensClothingComponent } from '../../shopping-womens-clothing/shopping-womens-clothing.component';

@NgModule({
  declarations: [ShoppingWomensClothingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShoppingWomensClothingComponent }
    ])
  ]
})
export class WomensModule { }
