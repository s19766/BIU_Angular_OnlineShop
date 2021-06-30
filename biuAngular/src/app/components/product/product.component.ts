import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductList } from 'src/app/model/productList.model';
import { __param } from 'tslib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: any;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe({
      next: param => {
        const id = param ['id'];
        this.product = ProductList.PRODUCTS[id]; //z listy produktow jest brany produkt po id
      }
    })
  }

  ngOnInit(): void {

  }

}
