import createProjForm from "../htmlcreations/createProjForm.js";

export default function openForm(string){
    if(string === 'projectAdd'){
        return createProjForm();
    }

};
