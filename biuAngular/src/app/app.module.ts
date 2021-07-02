import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { ActionCartDirective } from './components/commons/action-cart/action-cart.directive';
import { Cart } from './model/cart.model';
import { MatButtonModule } from '@angular/material/button';


//here we initialize empty cart in local storage if not exists
export function initializeCart(){
  return () => {
    const item = localStorage.getItem(Cart.NAME);
    console.log(item);
    if(!item || item.length == 0){
      localStorage.setItem(Cart.NAME,JSON.stringify([]));
    }
  }
}

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
    ActionCartDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeCart,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
