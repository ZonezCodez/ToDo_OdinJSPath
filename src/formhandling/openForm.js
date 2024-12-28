import createProjForm from "../htmlcreations/createProjForm.js";
import render from '../render/render.js';

export default function openForm(){
    render(createProjForm());
    return 'Rendered!';
};
