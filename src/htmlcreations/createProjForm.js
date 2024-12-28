import handleProjForm from "../formhandling/handleProjForm"; // Import this function to pass the form data on

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
    inputProj.setAttribute('id','inputProj');

    labelCreator.setAttribute('id','labelCreator');
    labelCreator.textContent = 'Your Name: ';
    inputCreator.setAttribute('id','inputCreator');

    labelDue.setAttribute('id','labelDue');
    labelDue.textContent = 'Due On: ';
    inputDue.setAttribute('id','inputDue');

    labelCreated.setAttribute('id','labelCreated');
    labelCreated.textContent = 'Todays Date: ';
    inputCreated.setAttribute('id','inputCreated');

    labelDesc.setAttribute('id','labelDesc');
    labelDesc.textContent = 'Project Description: ';
    inputDesc.setAttribute('id','inputDesc');
    inputDesc.rows = '10';
    inputDesc.cols = '20';

    submitBtn.setAttribute('id','submitBtn');
    submitBtn.type = 'submit';

    // Handles adding any event listeners to the form
    form.addEventListener('submit',handleProjForm(e));
    
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
    form,appendChild(labelDue);
    form.appendChild(labelCreated);
    form.appendChild(labelDesc);
    form.appendChild(submitBtn);

    return form;
    
};