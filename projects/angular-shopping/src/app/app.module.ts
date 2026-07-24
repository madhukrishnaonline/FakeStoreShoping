import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule} from '@angular/material/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingIndexComponent } from './components/shopping-index/shopping-index.component';
import { ShoppingHeaderComponent } from './components/shopping-header/shopping-header.component';
import { ShoppingMainComponent } from './components/shopping-main/shopping-main.component';
import { ShoppingFooterComponent } from './components/shopping-footer/shopping-footer.component';
import { ShoppingFiltersComponent } from './components/shopping-filters/shopping-filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingProductsComponent } from './components/shopping-products/shopping-products.component';
import { ShoppingCartItemsComponent } from './components/shopping-cart-items/shopping-cart-items.component';
import { ShoppingJeweleryComponent } from './components/shopping-jewelery/shopping-jewelery.component';
import { ShoppingMensClothingComponent } from './components/shopping-mens-clothing/shopping-mens-clothing.component';
import { ShoppingElectronicsComponent } from './components/shopping-electronics/shopping-electronics.component';
import { ShoppingWomensClothingComponent } from './components/shopping-womens-clothing/shopping-womens-clothing.component';
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
    ShoppingJeweleryComponent,
    ShoppingMensClothingComponent,
    ShoppingElectronicsComponent,
    ShoppingWomensClothingComponent,
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
      
  ],
  imports: [
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
  providers: [],
  bootstrap: [ShoppingIndexComponent]
})
export class AppModule { }
