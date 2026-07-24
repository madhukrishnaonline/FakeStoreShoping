import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFooterComponent } from './shopping-footer.component';

describe('ShoppingFooterComponent', () => {
  let component: ShoppingFooterComponent;
  let fixture: ComponentFixture<ShoppingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
