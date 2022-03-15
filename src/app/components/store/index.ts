import { ActionReducerMap } from "@ngrx/store";
import { TodoReducer, TodoReducerState } from "./todo.reducer";


export interface AppState  {
    todoList:TodoReducerState
}



export const reducer:ActionReducerMap<AppState, any> = {
    todoList:TodoReducer
}