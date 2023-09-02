import { Component } from '@angular/core';

@Component({
  selector: 'app-table-parent',
  templateUrl: './table-parent.component.html',
  styleUrls: ['./table-parent.component.css']
})
export class TableParentComponent {
  flag: boolean = true;
  isShow: boolean = false;
  isEdit: boolean = false;
  selectedIndex!: number;
  productObj: Product = new Product()
  productList: Product[] = [
    { productId: 1, productName: 'Laptop', productPrice: 20000 },
    { productId: 2, productName: 'LED Tv', productPrice: 22000 },

  ]
  editProduct(index: number) {
    this.productObj = this.productList[index]
    this.productObj={...this.productObj}
    console.log(this.productObj)


  }
  deleteProduct(index: number) {
    this.productList.splice(index, 1)
  }
  reciveData(obj: any) {
    if(obj.productId==undefined){
    this.productObj.productId = this.productList.length + 1;
    this.productObj.productName = obj.productName
    this.productObj.productPrice = obj.productPrice
    this.productList.push(this.productObj)
    }else{
      this.productList.splice(obj.productId,1,obj)
    }

  }

}

class Product {
  productId!: number;
  productName!: string;
  productPrice!: number;

}