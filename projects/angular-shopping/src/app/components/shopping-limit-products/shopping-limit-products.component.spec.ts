import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLimitProductsComponent } from './shopping-limit-products.component';

describe('ShoppingLimitProductsComponent', () => {
  let component: ShoppingLimitProductsComponent;
  let fixture: ComponentFixture<ShoppingLimitProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingLimitProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingLimitProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
