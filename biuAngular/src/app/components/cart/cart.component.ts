import { Component, ComponentFactory, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { ProductList } from 'src/app/model/productList.model';
import { RemoveCartComponent } from '../commons/remove-cart/remove-cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts = Cart.getAll();
  componentFactory!: ComponentFactory<RemoveCartComponent>;
  summary: number = 0;
  constructor(private componentFactoryResoler: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResoler.resolveComponentFactory(RemoveCartComponent);
    this.sum();
  }

  public clearCart() {
    Cart.clearCart();
    this.cartProducts = Cart.getAll();
    this.summary = 0;
  }

  public sum(){
    this.summary = 0;
    this.cartProducts.map(x=>x.price).forEach(price=>this.summary+=price);
  }

}
