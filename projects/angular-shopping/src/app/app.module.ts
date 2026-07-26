import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { ShoppingIndexComponent } from './components/shopping-index/shopping-index.component';
import { ShoppingHeaderComponent } from './components/shopping-header/shopping-header.component';
import { ShoppingMainComponent } from './components/shopping-main/shopping-main.component';
import { ShoppingFooterComponent } from './components/shopping-footer/shopping-footer.component';
import { ShoppingFiltersComponent } from './components/shopping-filters/shopping-filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingProductsComponent } from './components/shopping-products/shopping-products.component';
import { ShoppingCartItemsComponent } from './components/shopping-cart-items/shopping-cart-items.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ShoppingAllProductsComponent } from './components/shopping-all-products/shopping-all-products.component';
import { ShoppingDetailsComponent } from './components/shopping-details/shopping-details.component';
import { ShoppingAddProductComponent } from './components/shopping-add-product/shopping-add-product.component';
import { ShoppingRegisterComponent } from './components/shopping-register/shopping-register.component';
import { ShoppingSortDescComponent } from './components/shopping-sort-desc/shopping-sort-desc.component';
import { ShoppingLimitProductsComponent } from './components/shopping-limit-products/shopping-limit-products.component';
import { ShoppingLimitedProductsComponent } from './components/shopping-limited-products/shopping-limited-products.component';
import { ShoppingModalCartComponent } from './components/shopping-modal-cart/shopping-modal-cart.component';
import { ShoppingSearchResultsComponent } from './components/shopping-search-results/shopping-search-results.component';
import { ShoppingFavProductsComponent } from './components/shopping-fav-products/shopping-fav-products.component';
import { AuthInterceptor } from './components/Services/auth.interceptor';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingIndexComponent,
    ShoppingHeaderComponent,
    ShoppingMainComponent,
    ShoppingFooterComponent,
    ShoppingFiltersComponent,
    ShoppingProductsComponent,
    ShoppingCartItemsComponent,
    NotfoundComponent,
    ShoppingAllProductsComponent,
    ShoppingDetailsComponent,
    ShoppingAddProductComponent,
    ShoppingRegisterComponent,
    ShoppingSortDescComponent,
    ShoppingLimitProductsComponent,
    ShoppingLimitedProductsComponent,
    ShoppingModalCartComponent,
    ShoppingSearchResultsComponent,
    ShoppingFavProductsComponent,
    NotificationComponent,

  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [ShoppingIndexComponent]
})
export class AppModule { }
