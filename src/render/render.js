const renderArea = document.getElementById('content'); // Expects the template to have a content area where you change the view

export default function render(data,reset){
    if(reset === true){
        resetPage(); // Calls the resetpage function if reset variable is true;
        renderArea.appendChild(data); // data is expected to be a html object like a div with the appendeded data inside can be a p with text up to a div full of stuff
        return;
    }else{
        renderArea.appendChild(data); // data is expected to be a html object like a div with the appendeded data inside can be a p with text up to a div full of stuff
        return;
    }
}

function resetPage(){
    renderArea.textContent = ''; // This resets the render area before we append more data
}