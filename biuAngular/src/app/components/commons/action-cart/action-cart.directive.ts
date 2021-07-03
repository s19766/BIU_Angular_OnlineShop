import { Directive, ViewContainerRef } from "@angular/core";
import { Product } from "src/app/model/product.model";

@Directive({
  selector: '[actionCartButton]', //used in ng-template of prduct table
  inputs: ['product']
})
export class ActionCartDirective {
  constructor(public viewContainerRef: ViewContainerRef) { } //used in aftervievinit (product-table)
  product!: Product;
}
