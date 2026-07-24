import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingIndexComponent } from './shopping-index.component';

describe('ShoppingIndexComponent', () => {
  let component: ShoppingIndexComponent;
  let fixture: ComponentFixture<ShoppingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
