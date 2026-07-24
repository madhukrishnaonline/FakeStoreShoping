import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingMensClothingComponent } from './shopping-mens-clothing.component';

describe('ShoppingMensClothingComponent', () => {
  let component: ShoppingMensClothingComponent;
  let fixture: ComponentFixture<ShoppingMensClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingMensClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingMensClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
