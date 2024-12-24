export default class todo {
    constructor (creator,content,dueDate){
        this.creator = creator; // creator of the Todo entered into the form 
        this.content = content; // the content or like what the todo is
        this.dueDate = dueDate; // when the todo should be finished by this will be changeable
    }
}