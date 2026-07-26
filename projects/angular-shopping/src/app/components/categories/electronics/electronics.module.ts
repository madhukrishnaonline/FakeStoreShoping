import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingElectronicsComponent } from '../../shopping-electronics/shopping-electronics.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ShoppingElectronicsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShoppingElectronicsComponent }
    ])
  ]
})
export class ElectronicsModule { }
