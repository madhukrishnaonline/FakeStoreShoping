import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingProductsComponent } from './components/shopping-products/shopping-products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ShoppingDetailsComponent } from './components/shopping-details/shopping-details.component';
import { ShoppingAddProductComponent } from './components/shopping-add-product/shopping-add-product.component';
import { ShoppingRegisterComponent } from './components/shopping-register/shopping-register.component';
import { ShoppingUserRegisterGuard } from './gaurds/shopping-user-register.guard';
import { ShoppingSortDescComponent } from './components/shopping-sort-desc/shopping-sort-desc.component';
import { ShoppingLimitProductsComponent } from './components/shopping-limit-products/shopping-limit-products.component';
import { ShoppingLimitedProductsComponent } from './components/shopping-limited-products/shopping-limited-products.component';
import { ShoppingSearchResultsComponent } from './components/shopping-search-results/shopping-search-results.component';
import { ShoppingFavProductsComponent } from './components/shopping-fav-products/shopping-fav-products.component';

const routes: Routes = [
  { path: "products", component: ShoppingProductsComponent },
  { path: "electronics", loadChildren: () => import('./components/categories/electronics/electronics.module').then(m => m.ElectronicsModule) },
  { path: "jewelery", loadChildren: () => import('./components/categories/jewelery/jewelery.module').then(m => m.JeweleryModule) },
  { path: "mens", loadChildren: () => import('./components/categories/mens/mens.module').then(m => m.MensModule) },
  { path: "womens", loadChildren: () => import('./components/categories/womens/womens.module').then(m => m.WomensModule) },
  { path: "details/:id/:title", component: ShoppingDetailsComponent },
  { path: "sorting/products", component: ShoppingSortDescComponent },
  {
    path: "limited", component: ShoppingLimitProductsComponent,
    children: [
      { path: "products", component: ShoppingLimitedProductsComponent }
    ]
  },
  { path: "add/product", component: ShoppingAddProductComponent, canActivate: [ShoppingUserRegisterGuard] },
  { path: "login/user", component: ShoppingRegisterComponent },
  { path: "search", component: ShoppingSearchResultsComponent },
  { path: "WishList", component: ShoppingFavProductsComponent },
  // Wild Card routes
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
