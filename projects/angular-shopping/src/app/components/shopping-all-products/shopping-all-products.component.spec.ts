import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAllProductsComponent } from './shopping-all-products.component';

describe('ShoppingAllProductsComponent', () => {
  let component: ShoppingAllProductsComponent;
  let fixture: ComponentFixture<ShoppingAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingAllProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
