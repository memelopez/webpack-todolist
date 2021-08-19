import './style.css';
import UI from './ui';
import validateDescription from './validateDescription';

// When content loads
document.addEventListener('DOMContentLoaded', UI.addApp());

// Event: when form is submitted
document.querySelector('#addTaskForm').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (!validateDescription(taskDescription)) {
    console.log('Error- empty description');
  } else {
    // Add task
    UI.addTaskStore(taskDescription);
  }

  // reloads page
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});

document.querySelector('#task-list').addEventListener('change', (e) => {
  // checks if this is trigerring for the correct element
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    // Gets the state of the checked checkbox
    const checkboxState = e.target.checked;

    const ulList = document.querySelector('#task-list');
    const itemChecked = e.target.parentElement.parentElement;
    const nodes = Array.from(ulList.children);
    const index = nodes.indexOf(itemChecked);

    UI.taskCompleted(index, checkboxState);

    // Reload page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});
