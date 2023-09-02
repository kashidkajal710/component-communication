import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-inshurance',
  templateUrl: './parent-inshurance.component.html',
  styleUrls: ['./parent-inshurance.component.css']
})
export class ParentInshuranceComponent {
  inshuranceData: Inshurance[] = [];
  count!:number;
  totalCount!:number;
  inshuranceList: Inshurance[] = [
    { inshuranceHolderName: "Kajal", package: 'Comprehensive', preimum: 5000,claim:2 },
    { inshuranceHolderName: "Datta", package: 'Third-Party', preimum: 8000,claim:3 },
    { inshuranceHolderName: "Sushant", package: 'Comprehensive', preimum: 10000 ,claim:4},
    { inshuranceHolderName: "Ashwini", package: 'Third-Party', preimum: 6000 ,claim:5},
    { inshuranceHolderName: "Ashish", package: 'Comprehensive', preimum: 9000,claim:6 },


  ]
  constructor() {
    this.inshuranceData = this.inshuranceList
  }
  getInshuranceType(data: any) {
    console.log("Data Recived from Parent Comp", data)
    if (data === 'All') {
      this.inshuranceData = this.inshuranceList;
      console.log(this.inshuranceData)
      this.count=this.inshuranceData.length;
      this.totalCount=this.inshuranceData.reduce((acc:any,val:any)=> { return acc+ val.preimum},0)
      console.log(this.totalCount)
    } else {
      this.inshuranceData = this.inshuranceList.filter(el => el.package === data);
      console.log(this.inshuranceData)
      this.count=this.inshuranceData.length;
      this.totalCount=this.inshuranceData.reduce((acc:any,val:any)=> { return acc+ val.preimum},0)
      console.log(this.totalCount)
    }
  }
}

export class Inshurance {
  inshuranceHolderName!: string;
  package!: string;
  preimum!: number;
  claim!:number;

}
