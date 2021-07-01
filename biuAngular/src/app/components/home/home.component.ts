import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductList } from 'src/app/model/productList.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = ProductList.PRODUCTS;

  displayedColumns: string[] = ['id', 'name', 'price', ' '];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showProduct(id: number){
    this.router.navigateByUrl('product/' + id)
  }
}
