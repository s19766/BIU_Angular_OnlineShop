import { Component, OnInit } from '@angular/core';
import { Cart  } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { ActionCartComponent } from '../action-cart/action-cart.component';

@Component({
  selector: 'remove-cart',
  templateUrl: '../action-cart/action-cart.component.html',
  styleUrls: ['./remove-cart.component.css']
})
export class RemoveCartComponent extends ActionCartComponent implements OnInit {

  constructor() {
    super("Remove");
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public action(product: Product): void {
    Cart.deleteById(product.idInCart);
    window.location.reload();
  }

}
