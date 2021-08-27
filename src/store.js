// Store Class: Encapsulates de locacl storage
export default class Store {
  // gets tasks from storage and returns an array of objects
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static addTask(task) {
    if (task.description !== undefined && task.completed !== undefined
      && task.index !== undefined) {
      const tasks = this.getTasks();
      tasks.push(task);
      this.setTasks(tasks);
    }
  }

  // index - saves the total of tasks created ever
  static getIndexTotal() {
    let total;
    if (localStorage.getItem('index') === null) {
      total = 0;
    } else {
      total = JSON.parse(localStorage.getItem('index'));
    }

    return total;
  }

  // increments the index in storage and saves it again
  static setsIndexTotalPlusOne() {
    let total = this.getIndexTotal();
    total += 1;
    localStorage.setItem('index', JSON.stringify(total));
  }
}