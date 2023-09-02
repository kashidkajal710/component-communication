import { Component } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent {
  parentMessage:string="";

  dataReciveFromChildComp:string=""

  reciveMessage(event:any){
    this.dataReciveFromChildComp=event
  }
}
