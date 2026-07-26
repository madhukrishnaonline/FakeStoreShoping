import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingMensClothingComponent } from '../../shopping-mens-clothing/shopping-mens-clothing.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ShoppingMensClothingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShoppingMensClothingComponent }
    ])
  ]
})
export class MensModule { }
