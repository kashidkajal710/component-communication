import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-child',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.css']
})
export class TableChildComponent {
  isShow: boolean = true;
  @Input()
  reciveData: Product = new Product()
  @Output()
  sendData: EventEmitter<any> = new EventEmitter<any>()
  addProduct() {
    this.productObj = this.reciveData
    if (this.productObj.productId == undefined) {
      this.isShow = false;
      console.log(this.productObj)
      this.sendData.emit(this.productObj);
      this.productObj = new Product()
    }else{
      this.sendData.emit(this.reciveData)
    }


  }
  hide() {

  }
  productObj: Product = new Product()

}
class Product {
  productId!: number;
  productName!: string;
  productPrice!: number;
}