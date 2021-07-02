import { AfterViewInit, Inject, Input } from '@angular/core';
import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';


@Injectable()
export abstract class ActionCartComponent implements OnInit {
  @Input() product!: Product;

  constructor(@Inject('actionName') public actionName: string) { }

  ngOnInit(): void {
    document.getElementsByName("action-button").forEach(x=>x.innerHTML = this.actionName);
  }

  public abstract action(product: Product): void;
}
