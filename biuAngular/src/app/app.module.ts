import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProductTableComponent } from './components/commons/product-table/product-table.component';
import { AddCartComponent } from './components/commons/add-cart/add-cart.component';
import { RemoveCartComponent } from './components/commons/remove-cart/remove-cart.component';
import { ActionCartComponent } from './components/commons/action-cart/action-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProductTableComponent,
    AddCartComponent,
    RemoveCartComponent,
    ActionCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
