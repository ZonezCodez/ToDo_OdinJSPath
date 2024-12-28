// Imports
import render from './render/render.js';
import openForm from './formhandling/openForm.js';

// Variables
const projAdd = document.getElementById('projectAdd');

// Event Listeners
projAdd.addEventListener('click',render(openForm('projectAdd')));

// Functions