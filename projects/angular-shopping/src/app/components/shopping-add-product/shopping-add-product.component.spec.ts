import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAddProductComponent } from './shopping-add-product.component';

describe('ShoppingAddProductComponent', () => {
  let component: ShoppingAddProductComponent;
  let fixture: ComponentFixture<ShoppingAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
