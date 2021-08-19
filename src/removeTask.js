// Module for removing task

import Store from './store';

export default function removeCompleted(index) {
  // gets todos from local storage
  const todos = Store.getTasks();

  todos.splice(index, 1);

  Store.setTasks(todos);
}