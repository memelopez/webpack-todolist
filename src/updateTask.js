// Module for updating task

import Store from './store';

export default function updateTask(index, newDesc) {
  // gets todos from local storage
  const todos = Store.getTasks();
  // sets new description in respective index
  todos[index].description = newDesc;
  // sets new todos to storage
  Store.setTasks(todos);
}