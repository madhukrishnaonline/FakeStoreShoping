import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSearchResultsComponent } from './shopping-search-results.component';

describe('ShoppingSearchResultsComponent', () => {
  let component: ShoppingSearchResultsComponent;
  let fixture: ComponentFixture<ShoppingSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingSearchResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
