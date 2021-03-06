import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { ActionCartComponent } from '../action-cart/action-cart.component';

@Component({
  selector: 'add-cart',
  templateUrl: '../action-cart/action-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent extends ActionCartComponent implements OnInit {

  //change actionName from action-cart
  constructor() {
    super("Add to cart");
   }

   //refresh
  ngOnInit(): void {
    super.ngOnInit();
  }

  //override function from action-cart
  public action(product: Product): void {
    Cart.save(product);
  }
}
