import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingJeweleryComponent } from './shopping-jewelery.component';

describe('ShoppingJeweleryComponent', () => {
  let component: ShoppingJeweleryComponent;
  let fixture: ComponentFixture<ShoppingJeweleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingJeweleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingJeweleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
