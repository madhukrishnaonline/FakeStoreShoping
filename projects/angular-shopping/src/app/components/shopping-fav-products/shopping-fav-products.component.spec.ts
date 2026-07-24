import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFavProductsComponent } from './shopping-fav-products.component';

describe('ShoppingFavProductsComponent', () => {
  let component: ShoppingFavProductsComponent;
  let fixture: ComponentFixture<ShoppingFavProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingFavProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingFavProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
