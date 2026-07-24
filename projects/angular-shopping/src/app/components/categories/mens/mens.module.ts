import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingMensClothingComponent } from '../../shopping-mens-clothing/shopping-mens-clothing.component';

@NgModule({
  declarations: [ShoppingMensClothingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShoppingMensClothingComponent }
    ])
  ]
})
export class MensModule { }
