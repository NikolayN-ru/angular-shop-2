import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductResolver } from './services/product.resolver';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'products/:id',
    component: ProductComponent,
    resolve: { data: ProductResolver },
  },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '', component: MainComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
