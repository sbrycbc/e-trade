import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})

export class HomeComponent implements OnInit {

  product: ProductModel = new ProductModel
  products: ProductModel[] = [ ]
  constructor() { }
    ngOnInit(): void {
   }
  
  addProduct(){
    this.products.push(this.product);
    this.product = new ProductModel();

  }

}
