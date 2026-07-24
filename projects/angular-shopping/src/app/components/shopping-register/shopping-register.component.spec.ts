import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingRegisterComponent } from './shopping-register.component';

describe('ShoppingRegisterComponent', () => {
  let component: ShoppingRegisterComponent;
  let fixture: ComponentFixture<ShoppingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
