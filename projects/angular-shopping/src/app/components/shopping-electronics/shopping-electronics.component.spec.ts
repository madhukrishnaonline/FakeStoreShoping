import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingElectronicsComponent } from './shopping-electronics.component';

describe('ShoppingElectronicsComponent', () => {
  let component: ShoppingElectronicsComponent;
  let fixture: ComponentFixture<ShoppingElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
