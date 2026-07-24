import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSortDescComponent } from './shopping-sort-desc.component';

describe('ShoppingSortDescComponent', () => {
  let component: ShoppingSortDescComponent;
  let fixture: ComponentFixture<ShoppingSortDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingSortDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingSortDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
