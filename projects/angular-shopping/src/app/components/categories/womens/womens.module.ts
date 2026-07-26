import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingWomensClothingComponent } from '../../shopping-womens-clothing/shopping-womens-clothing.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ShoppingWomensClothingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShoppingWomensClothingComponent }
    ])
  ]
})
export class WomensModule { }
