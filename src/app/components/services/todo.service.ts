import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Todo[] = [
  ]

  sendList = new Subject<Todo[]>()
  selectedItem = new BehaviorSubject<Todo | undefined>(undefined)

  constructor() {}

  getList(){
    this.sendList.next(this.todoList)
    console.log(this.todoList)
  }

  addItem(todo:Todo){
    this.todoList.push(todo)
    this.sendList.next(this.todoList)
  }

  getCompleted(){
    const completedArr = this.todoList.filter(item => item.status == 'completed')
    this.sendList.next(completedArr)
  }

  getActive(){
    const activeArr = this.todoList.filter(item => item.status == 'active')
    this.sendList.next(activeArr)
  }

  handleDelete(id:string){
    this.todoList = this.todoList.filter(item => item.id != id )
    this.sendList.next(this.todoList)
  }

  handleEdit(id:string){
    const item = this.todoList.find(item => item.id == id)
    console.log(item)
    this.selectedItem.next(item)
  }


  handleEditItem(todo:{name:string,id:string, status:string }){
    const item = this.todoList.find((item, idx) => item.id == todo.id)
    if(item){
      item.name = todo.name
      item.status  = todo.status
    }

    this.selectedItem.next(undefined)
    this.sendList.next(this.todoList)
  }



}
