import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ClosemodelComponent, Dialogdata } from '../closemodel/closemodel.component';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { AppState } from '../store';
import { DeleteTodoAction, SelectTodoAction } from '../store/todo.actions';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {


  @Input('item') item:Todo;
  constructor(private todoService:TodoService, public dialog:MatDialog, private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  handleDelete(id:string){
    this.store.dispatch(new DeleteTodoAction(id))
  }


  openDialog(){
    const dialogRef = this.dialog.open(ClosemodelComponent, {
      width:"250px",
      data:{
        id:this.item.id
      }
      
    })

    dialogRef.afterClosed().subscribe((result:string) =>{
      console.log("here")
      console.log(result)
      this.handleDelete(result)
    })
  }

  handleClick(){
    this.store.dispatch(new SelectTodoAction(this.item))
  }

}
