import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inshurance-child',
  templateUrl: './inshurance-child.component.html',
  styleUrls: ['./inshurance-child.component.css']
})
export class InshuranceChildComponent {
  
 inshuranceType: string ="All";

 @Input()
 list!:number;
 @Input()
 dataRecivedFromParent!:number;
 @Output()
 sendInshuranceType: EventEmitter<string> = new EventEmitter<string>();
 selectInshuranceType() {
   console.log(this.sendInshuranceType)
   this.sendInshuranceType.emit(this.inshuranceType)
 }
 Claim(){

 }
}


