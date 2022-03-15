import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { AppState } from '../store';
import { GetActiveTasks, GetAllTasks, GetCompletedTasks } from '../store/todo.actions';

export const todoList = (state:AppState) => state.todoList.todoList
export const filterList = (state:AppState) => state.todoList.filteredList

export enum selectionType{
  all ="GetAll",
  active = "GetActive",
  completed = "GetCompleted"
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})



export class TodolistComponent implements OnInit {


  list:Todo[];
  activeSelected:selectionType = selectionType.all;

  constructor(private todoService:TodoService, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(store => store).subscribe(res =>{
      const allList = res.todoList.todoList
      switch(this.activeSelected){
        case selectionType.all:
          this.list = allList
          return
        case selectionType.completed:
          this.list = allList.filter(item => item.status == 'completed')
          return
        case selectionType.active:
          this.list = allList.filter(item => item.status == 'active')
          return
        default:
          return
      }
    })
  }


  handleCompleted(){
    this.activeSelected = selectionType.completed
    this.store.dispatch(new GetAllTasks())
  }

  handleActive(){
    this.activeSelected = selectionType.active
    this.store.dispatch(new GetAllTasks())
  }

  handleAll(){
    this.activeSelected = selectionType.all
    this.store.dispatch(new GetAllTasks())
  }
  


}
