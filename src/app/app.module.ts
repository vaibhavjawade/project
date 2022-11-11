import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopingKartComponent } from './shoping-kart/shoping-kart.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { TokenAddInterceptor } from 'src/token-add.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ShopingKartComponent,
    AddProductsComponent,
    LoaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ GuardGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenAddInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
