import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoitemComponent } from '../todoitem/todoitem.component';

export interface Dialogdata {
  id:string
}

@Component({
  selector: 'app-closemodel',
  templateUrl: './closemodel.component.html',
  styleUrls: ['./closemodel.component.css']
})


export class ClosemodelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TodoitemComponent>,  @Inject(MAT_DIALOG_DATA) public data:Dialogdata,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
