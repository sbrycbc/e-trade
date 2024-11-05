import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements AfterContentChecked{
  
  baskets: BasketModel[] = [];

  constructor(
    private _basket: BasketService
  ) { }

  ngAfterContentChecked(): void {
    this.baskets = this._basket.baskets;
  }
  
  delete(id:number){
    this._basket.delete(id);
  }

}
