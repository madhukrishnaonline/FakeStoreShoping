import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingMainComponent } from './shopping-main.component';

describe('ShoppingMainComponent', () => {
  let component: ShoppingMainComponent;
  let fixture: ComponentFixture<ShoppingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
