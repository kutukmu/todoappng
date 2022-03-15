import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = []
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.sendList.subscribe((item:Todo[]) =>{
      this.todoList = item
    })
  }

}
