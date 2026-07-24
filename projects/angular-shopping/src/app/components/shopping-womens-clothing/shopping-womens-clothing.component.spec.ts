import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingWomensClothingComponent } from './shopping-womens-clothing.component';

describe('ShoppingWomensClothingComponent', () => {
  let component: ShoppingWomensClothingComponent;
  let fixture: ComponentFixture<ShoppingWomensClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingWomensClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingWomensClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
