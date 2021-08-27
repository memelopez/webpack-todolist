// Module for removing task

import Store from './store';

export default function removeCompleted(index) {
  // gets todos from local storage
  if (typeof (index) === 'number') {
    const todos = Store.getTasks();

    todos.splice(index, 1);

    Store.setTasks(todos);
  }
}