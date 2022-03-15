import { importExpr } from "@angular/compiler/src/output/output_ast"
import { Action } from "@ngrx/store"
import { Todo } from "../models/todo.model"


export enum TodoActionConstants  {
    LoadingTodo ="[Todo] LOADING_TODO_ITEM",
    AddTodo ="[Todo] ADD_TODO_ITEM",
    EditTodoItem ="[Todo] EDIT_TODO_ITEM",
    DeleteTodoItem ="[Todo] DELETE_TODO_ITEM",
    SelectTodoItem = "[Todo] SELECT_TODO_ITEM",
    GetAllTasks = "[Todo] GET_ALL_TASKS",
    GetCompletedTasks = "[Todo] GET_COMPLETED_TASKS",
    GetActiveTasks = "[Todo] GET_ACTIVE_TASKS"
}


export class LoadingTodoAction implements Action{
    public readonly type  = TodoActionConstants.LoadingTodo

    constructor(public payload:string){
    }
}


export class AddTodoAction implements Action{
    public readonly type = TodoActionConstants.AddTodo

    constructor(public payload:Todo){
    }

}

export class GetAllTasks implements Action{
    public readonly type = TodoActionConstants.GetAllTasks
}

export class GetCompletedTasks implements Action{
    public readonly type = TodoActionConstants.GetCompletedTasks
}

export class GetActiveTasks implements Action{
    public readonly type = TodoActionConstants.GetActiveTasks
}

export class DeleteTodoAction implements Action{
    public readonly type = TodoActionConstants.DeleteTodoItem

    constructor(public payload:string){

    }
}

export class EditTodoAction implements Action {
    public readonly type  = TodoActionConstants.EditTodoItem

    constructor(public payload:{id:string, name:string, status:string}){}
}


export class SelectTodoAction implements Action{
    public readonly type = TodoActionConstants.SelectTodoItem
    constructor(public payload:Todo){
    }

}








