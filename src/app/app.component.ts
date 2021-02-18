import { Component, VERSION } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

export interface Columns {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  firstNameCh: boolean = true;
  lastNameCh: boolean = true;
  emailCh: boolean = true;

  firstNameOrder: number = 1;
  lastNameOrder: number = 2;
  emailOrder: number = 3;

  columns: Columns[] = [
    { name: "firstName" },
    { name: "lastName" },
    { name: "email" }
  ];



  drop(event: CdkDragDrop<Columns[]>) {
    debugger;
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    debugger;
    this.columns.forEach((item, index) => {
      if(item.name === 'firstName') {
        this.firstNameOrder = index;
      } else
      if(item.name === 'lastName') {
        this.lastNameOrder = index;
      } else
      if(item.name === 'email') {
        this.emailOrder = index;
      }
    });
  }

}
