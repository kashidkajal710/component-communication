import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-practice-component',
  templateUrl: './parent-practice-component.component.html',
  styleUrls: ['./parent-practice-component.component.css']
})
export class ParentPracticeComponentComponent {

  studentDetails: Student[] = []

  studentObj: Student = new Student()

  reciveData(obj: any) {
    this.studentDetails.push(obj)
  }
}
class Student {
  name!: string;
  age!: number;
}


