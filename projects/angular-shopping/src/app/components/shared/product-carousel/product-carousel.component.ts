import { Component, OnInit, Input } from '@angular/core';
import { FakestoreProductContract } from '../../Contracts/FakestoreProductContract';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {
  @Input() items: FakestoreProductContract[] = [];
  @Input() indicators: number[] = [];
  @Input() slideFade: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // component is now input-driven; data is provided by the parent
  }

  trackByProductId(index: number, product: FakestoreProductContract) {
    return product && product.id ? product.id : index;
  }

  navigateToDetail(product: FakestoreProductContract) {
    if (product && product.id) this.router.navigate(['/details', product.id, product.title]);
  }
}
