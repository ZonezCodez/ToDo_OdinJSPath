import handleProjForm from "../formhandling/handleProjForm.js"; // Import this function to pass the form data on
import returnHome from '../formhandling/returnHome.js'; // Import this function for when you go back to the homepage after deciding not to make a new project

export default function createProjForm(){
    // Variables to create all the html for this form
    const form = document.createElement('form'); // Create a form element 
    const exitForm = document.createElement('div'); // Create a div element
    const title = document.createElement('p'); // Create a paragraph element
    const labelProj = document.createElement('label'); // Create a label element
    const inputProj = document.createElement('input'); // Create an input element
    const labelCreator = document.createElement('label'); // Create a label element
    const inputCreator = document.createElement('input'); // Create an input element
    const labelDue = document.createElement('label'); // Create a label element
    const inputDue = document.createElement('input'); // Create an input element
    const labelCreated = document.createElement('label'); // Create a label element
    const inputCreated = document.createElement('input'); // Create an input element
    const labelDesc = document.createElement('label'); // Create a label element
    const inputDesc = document.createElement('textarea'); // Create an textarea element
    const submitBtn = document.createElement('input'); // Create the submit button

    // Add ids,text,classes,type,etc to the variables
    form.setAttribute('id','form');
    form.action = 'submit';

    exitForm.setAttribute('id','exitForm');
    exitForm.textContent = 'X';

    title.setAttribute('id','title');
    title.textContent = 'Add Project';

    labelProj.setAttribute('id','labelProj');
    labelProj.textContent = 'Project Name: ';
    labelProj.setAttribute('for','Project');
    inputProj.setAttribute('id','inputProj');
    inputProj.setAttribute('name','Project');

    labelCreator.setAttribute('id','labelCreator');
    labelCreator.textContent = 'Your Name: ';
    labelCreator.setAttribute('for','Creator');
    inputCreator.setAttribute('id','inputCreator');
    inputCreator.setAttribute('name','Creator');

    labelDue.setAttribute('id','labelDue');
    labelDue.textContent = 'Due On: ';
    labelDue.setAttribute('for','Due');
    inputDue.setAttribute('id','inputDue');
    inputDue.setAttribute('name','Due');

    labelCreated.setAttribute('id','labelCreated');
    labelCreated.textContent = 'Todays Date: ';
    labelCreated.setAttribute('for','Created');
    inputCreated.setAttribute('id','inputCreated');
    inputCreated.setAttribute('name','Created');

    labelDesc.setAttribute('id','labelDesc');
    labelDesc.textContent = 'Project Description: ';
    labelDesc.setAttribute('for','Desc');
    inputDesc.setAttribute('id','inputDesc');
    inputDesc.rows = '5';
    inputDesc.cols = '30';
    inputDesc.setAttribute('name','Desc');

    submitBtn.setAttribute('id','submitBtn');
    submitBtn.type = 'submit';

    // Handles adding any event listeners to the form
    form.addEventListener('submit',(e)=>{e.preventDefault(); handleProjForm(form)});
    exitForm.addEventListener('click',returnHome);
    
    // Appends everything to the form then returns the form variable
    labelProj.appendChild(inputProj);
    labelCreator.appendChild(inputCreator);
    labelDue.appendChild(inputDue);
    labelCreated.appendChild(inputCreated);
    labelDesc.appendChild(inputDesc);

    form.appendChild(exitForm);
    form.appendChild(title);
    form.appendChild(labelProj);
    form.appendChild(labelCreator);
    form.appendChild(labelDue);
    form.appendChild(labelCreated);
    form.appendChild(labelDesc);
    form.appendChild(submitBtn);

    return form;
    
};