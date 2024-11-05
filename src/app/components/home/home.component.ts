import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})

export class HomeComponent implements OnInit {

  api: string =environment.api
  product: ProductModel = new ProductModel
  products: ProductModel[] = [ ]
  constructor(
    private _http: HttpClient,
    private _basket:BasketService
  ) { }
    ngOnInit(): void {
      this.getProductList();
   }

  getProductList(){
    this._http.get<any>(this.api + "products").subscribe({
      next : (res)=>this.products = res,
      error:(err)=>console.log(err)
    })
  }
  
  addProduct(){
    this._http.post<any>(this.api + "products", this.product).subscribe({
      next:(res)=>{
        this.getProductList();
        this.product = new ProductModel();
      },
      error:(err)=>console.log(err)
    })
  }

  addBasket(model: ProductModel){
    this._http.post<any>(this.api + "baskets",model).subscribe({
      next:(res)=>{console.log("Product schon da!!")
        this.getBaskets()
      },
      error:(err)=>console.log(err)
    })
  }

  getBaskets(){
    this._http.get<any>(this.api + "baskets").subscribe({
      next : (res)=>this._basket.baskets = res,
      error : (err)=>console.log(err)
    })
  }

}
