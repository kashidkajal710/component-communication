import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  childMessage:string="";
  @Input() dataReceivedFromParentComp!:string;

  @Output() sendData:EventEmitter<string>=new EventEmitter<string>

  dataSendToParent(){
    this.sendData.emit(this.childMessage)
  }
}
