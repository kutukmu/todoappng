export enum statusList {
    active = "Active",
    completed = "Completed"
}

export class Todo{
    constructor(public name:string, public createdAt:Date, public id:string, public status:string){

    }
}