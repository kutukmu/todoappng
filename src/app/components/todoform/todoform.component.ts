import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import * as uuid from 'uuid';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { AddTodoAction, EditTodoAction } from '../store/todo.actions';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {


  name=''
  id:string = ''
  isActive = false
  isEditing = false
  constructor(private todoService:TodoService, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(store => store.todoList).subscribe(item =>{
      const selected = item.selectedItem;
      console.log(selected)
      if(selected){
        this.isEditing = true
        this.name = selected.name
        this.id = selected.id
        this.isActive  = selected.status == 'active'? true:false
      }
    })
  }


  handleSubmit(){
    const status = this.isActive?"active":'completed'
    const id = uuid.v4()
    if(this.isEditing){
      this.store.dispatch( new EditTodoAction({id:this.id, name:this.name, status:status}))
    }else{
      const todo = new Todo(this.name, new Date(), id, status)
      this.store.dispatch(new AddTodoAction(todo))
    }
    
    this.name = ''
    this.isActive = false
    this.isEditing = false
  }

  handleSwitch(){
    this.isActive = !this.isActive
    console.log(this.isActive)
  }

  getActiveClass(){
    return {
      'mat-checked': this.isActive
    }
  }

}
