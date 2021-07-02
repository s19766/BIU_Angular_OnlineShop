import { Component, ComponentFactory, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ProductList } from 'src/app/model/productList.model';
import { AddCartComponent } from '../commons/add-cart/add-cart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = ProductList.PRODUCTS;
  componentFactory!: ComponentFactory<AddCartComponent>;
  constructor(private componentFactoryResoler: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResoler.resolveComponentFactory(AddCartComponent);
  }

}
