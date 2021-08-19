// Module for clearing completed tasks method

import Store from './store';
import returnsUncompleted from './isCompleted';

export default function clearCompleted() {
  // gets todos from local storage
  const tasks = Store.getTasks();

  // create new array from filter()
  const uncompletedTasks = tasks.filter(returnsUncompleted);

  Store.setTasks(uncompletedTasks);
}