import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-practice-component',
  templateUrl: './child-practice-component.component.html',
  styleUrls: ['./child-practice-component.component.css']
})
export class ChildPracticeComponentComponent {
@Input()
sendDataToChild:any

@Output()
sendData:EventEmitter<any>=new EventEmitter<any>()

addDetails(){
  this.sendData.emit(this.sendDataToChild)
}
}
