import { Directive, ViewContainerRef } from "@angular/core";
import { Product } from "src/app/model/product.model";

@Directive({
  selector: '[actionCartButton]',
  inputs: ['product']
})
export class ActionCartDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
  product!: Product;
}
