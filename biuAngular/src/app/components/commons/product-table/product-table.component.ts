import { AfterContentInit, AfterViewInit, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { Component, ComponentFactory, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ActionCartComponent } from '../action-cart/action-cart.component';
import { ActionCartDirective } from '../action-cart/action-cart.directive';
import { AddCartComponent } from '../add-cart/add-cart.component';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit, AfterViewInit {

  @Input()
  products!: Product[];
  @Input()
  componentFactory!: ComponentFactory<ActionCartComponent>;

  @Input()
  actionName!: string;

  displayedColumns: string[] = ['id', 'name', 'price', 'actionButton'];

  @ViewChildren(ActionCartDirective) actionCartButtons!: QueryList<ActionCartDirective>;

  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    this.actionCartButtons.forEach(actionCartButton => {
      const viewContainerRef = actionCartButton.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<ActionCartComponent>(this.componentFactory);
      componentRef.instance.product = actionCartButton.product;
      componentRef.instance.ngOnInit();
    });

  }

  ngOnInit(): void {

  }

  showProduct(id: number) {
    this.router.navigateByUrl('product/' + id)
  }

}
