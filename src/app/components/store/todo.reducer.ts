import { Todo } from "../models/todo.model";
import { AddTodoAction, DeleteTodoAction, EditTodoAction, GetActiveTasks, GetAllTasks, GetCompletedTasks, LoadingTodoAction, SelectTodoAction, TodoActionConstants } from "./todo.actions";

export interface TodoReducerState{
    todoList:Todo[],
    filteredList:Todo[],
    selectedItem: Todo | null,
    loading:boolean
}

export const initialState:TodoReducerState = {
    todoList:[],
    filteredList:[],
    selectedItem:null,
    loading:false
}

export function TodoReducer(state = initialState, action:actions):TodoReducerState{
    switch(action.type){
        case TodoActionConstants.LoadingTodo:
            return {...state, loading:false}
        case TodoActionConstants.AddTodo:
            return {...state, todoList:[...state.todoList, action.payload]}
        case TodoActionConstants.DeleteTodoItem:
            const newarr = state.todoList.filter(item => item.id != action.payload)
            return {...state, todoList:[...newarr]}
        case TodoActionConstants.GetActiveTasks:
            return {...state, filteredList:state.todoList.filter(item => item.status == 'active')}
        case TodoActionConstants.GetCompletedTasks:
            return {...state, filteredList: state.todoList.filter(item => item.status == 'completed')}
        case TodoActionConstants.GetAllTasks:
            return {...state, filteredList:[...state.todoList]}
        case TodoActionConstants.SelectTodoItem:
            return {...state, selectedItem:action.payload}
        case TodoActionConstants.EditTodoItem:
            const newList = state.todoList.map((item, idx) =>{
                if(item.id == action.payload.id){
                    return {...item, name:action.payload.name, status: action.payload.status}
                }else{
                    return item
                }
            })
            
            return {...state, todoList:[...newList]}
        default:
            return state


    }
}

export type actions = LoadingTodoAction | AddTodoAction | SelectTodoAction | DeleteTodoAction | GetActiveTasks | GetCompletedTasks | GetAllTasks | EditTodoAction