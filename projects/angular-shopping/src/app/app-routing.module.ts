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
import { ROUTES } from './ROUTES';

const routes: Routes = [
  { path: ROUTES.PRODUCTS, component: ShoppingProductsComponent },
  { path: ROUTES.ELECTRONICS, loadChildren: () => import('./components/categories/electronics/electronics.module').then(m => m.ElectronicsModule) },
  { path: ROUTES.JEWELERY, loadChildren: () => import('./components/categories/jewelery/jewelery.module').then(m => m.JeweleryModule) },
  { path: ROUTES.MENS, loadChildren: () => import('./components/categories/mens/mens.module').then(m => m.MensModule) },
  { path: ROUTES.WOMENS, loadChildren: () => import('./components/categories/womens/womens.module').then(m => m.WomensModule) },
  { path: ROUTES.DETAILS + '/:id/:title', component: ShoppingDetailsComponent },
  { path: ROUTES.SORTING_PRODUCTS, component: ShoppingSortDescComponent },
  {
    path: ROUTES.LIMITED, component: ShoppingLimitProductsComponent,
    children: [
      { path: ROUTES.PRODUCTS, component: ShoppingLimitedProductsComponent }
    ]
  },
  { path: ROUTES.ADD_PRODUCT, component: ShoppingAddProductComponent, canActivate: [ShoppingUserRegisterGuard] },
  { path: ROUTES.LOGIN, component: ShoppingRegisterComponent },
  { path: ROUTES.SEARCH, component: ShoppingSearchResultsComponent },
  { path: ROUTES.WISHLIST, component: ShoppingFavProductsComponent },
  // Wild Card routes
  { path: '', redirectTo: ROUTES.PRODUCTS, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
