import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  api: string = environment.api;
  baskets:BasketModel[] =[]

  constructor(
    private _http:HttpClient
  ) { }
  ngOnInit(): void {
  }

  getBaskets(){
    this._http.get<any>(this.api + "baskets").subscribe({
      next : (res)=>this.baskets = res,
      error : (err)=>console.log(err)
    })
  }

}


