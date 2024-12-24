export default class project {
    constructor(title,dueDate,creator,created) {
        this.title = title; // The title of the project or like the projects name
        this.dueDate = dueDate; // The assigned due date for said project
        this.creator = creator; // The name entered when created
        this.created = created; // Date Created
        this.toDos = []; // Array of this projects todos did this because every todo is also its own class object
        this.projNotes = ''; // This is to hold the data of the notes section on the project page we create
        this.size = 0; // Will help me identify positions for deletions
    }

    changeTitle(){

    }

    changeDue(){

    }

    addToDo(toDo){

    }

    createToDo(todoObj){

    }

    deleteToDo(todoId){

    }

    changeProjNotes(){

    }
}