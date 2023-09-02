import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inshurance-typechild',
  templateUrl: './inshurance-typechild.component.html',
  styleUrls: ['./inshurance-typechild.component.css']
})
export class InshuranceTypechildComponent {
  inshuranceType: string ="All";

  @Input()
  list!: number;
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

