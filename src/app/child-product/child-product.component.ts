import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent {
  productObj: Product = new Product();
@Input()
dataRecivedFromParentComp!:string;
  @Output()
  sendData:EventEmitter<any>=new EventEmitter<any>();

    
addProduct(){
this.sendData.emit(this.productObj);
this.productObj=new Product()


  }
}
class Product{
  productName!:string;
  price!:number;
}
