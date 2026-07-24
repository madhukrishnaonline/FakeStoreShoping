import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingElectronicsComponent } from '../../shopping-electronics/shopping-electronics.component';

@NgModule({
  declarations: [ShoppingElectronicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShoppingElectronicsComponent }
    ])
  ]
})
export class ElectronicsModule { }
