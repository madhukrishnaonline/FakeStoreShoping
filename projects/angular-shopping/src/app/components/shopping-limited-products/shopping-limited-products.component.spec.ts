import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLimitedProductsComponent } from './shopping-limited-products.component';

describe('ShoppingLimitedProductsComponent', () => {
  let component: ShoppingLimitedProductsComponent;
  let fixture: ComponentFixture<ShoppingLimitedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingLimitedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingLimitedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
