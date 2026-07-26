import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';

@NgModule({
  declarations: [ProductCarouselComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ProductCarouselComponent]
})
export class SharedModule { }
