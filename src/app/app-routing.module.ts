import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { GuardGuard } from './guard.guard';
import { LoginComponent } from './login/login.component';

import { ShopingKartComponent } from './shoping-kart/shoping-kart.component';

const routes: Routes = [
  { path:'productPage', component:ShopingKartComponent},
  { path:'add-product',component:AddProductsComponent,
  canActivate:[GuardGuard]},
  {path:'loginPage',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
