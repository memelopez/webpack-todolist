import Task from './task';
import Store from './store';
// import UI from './ui';
import removeTask from './removeTask';

class MockLocalStorage {
  constructor() {
    this.storage = {};
  }

  getItem(key) {
    return this.storage[key] || null;
  }

  setItem(key, value) {
    if (value) {
      this.storage[key] = value;
    }
  }

  removeItem(key) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

global.localStorage = new MockLocalStorage();

describe('For Adding Tasks', () => {
  describe('addTask method from Store class', () => {
    test('Empty list is initialized', () => {
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(0);
    });
    test('Check Tasks length after adding two taks', () => {
      const tasksOne = new Task('This is a description', false, 0);
      const taskTwo = new Task('This is another description', false, 1);
      Store.addTask(tasksOne);
      Store.addTask(taskTwo);
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
    test('Try to store an empty task, the Tasks length would be the same', () => {
      const taskEmpty = new Task();
      Store.addTask(taskEmpty);
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
    test('Try to store when one argument is missing the Tasks length would be the same', () => {
      const taskEmpty = new Task('Another great description');
      Store.addTask(taskEmpty);
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
  });

  describe('HTML elements appears when showing the tasks', () => {
    const taskList = document.createElement('ul');
    beforeEach(() => {
      taskList.innerHTML = '';
      const tasks = Store.getTasks();
      tasks.forEach((task) => {
        taskList.innerHTML += `
            <li class="${task.completed}">${task.description}</li>
          `;
      });
    });
    test('Check if li children are counted', () => {
      const tasksListLength = taskList.children.length;
      expect(tasksListLength).toEqual(2);
    });
    test('Check if children class are according the completed status', () => {
      const statusCompleted = taskList.children[0].classList[0];
      expect(statusCompleted).toEqual('false');
    });
    test('Check if children value is according to description text', () => {
      const tasks = Store.getTasks();
      const textValueTaskOne = taskList.children[0].textContent;
      expect(textValueTaskOne).toEqual(tasks[0].description);
    });
  });
});

describe('For Removing Tasks', () => {
  describe('removeTask method from Store class', () => {
    test('Two tasks are initialized', () => {
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
    test('removeTask does not work if string is passed as argument', () => {
      removeTask('The first one, please');
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
    test('removeTask does not work if boolean is passed as argument', () => {
      removeTask(false);
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
    test('removeTask only remove existing index', () => {
      removeTask(2);
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
    test('Check length when a task is removed', () => {
      removeTask(0);
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(1);
    });
    test('Index 1 is not existing due to the index changes for all tasks', () => {
      removeTask(1);
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(1);
    });
    test('Return 0 when list become empty list again', () => {
      removeTask(0);
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(0);
    });
  });
  describe('HTML elements dissapear when showing the tasks', () => {
    const taskList = document.createElement('ul');
    beforeEach(() => {
      taskList.innerHTML = '';
      const tasks = Store.getTasks();
      tasks.forEach((task) => {
        taskList.innerHTML += `
          <li class="${task.completed}">${task.description}</li>
        `;
      });
    });
    test('Two tasks are initialized', () => {
      const tasksOne = new Task('This is a description', false, 0);
      const taskTwo = new Task('This is another description', false, 1);
      Store.addTask(tasksOne);
      Store.addTask(taskTwo);
      const tasks = Store.getTasks();
      const tasksListLength = tasks.length;
      expect(tasksListLength).toEqual(2);
    });
    test('Check if li children are counted', () => {
      const tasksListLength = taskList.children.length;
      expect(tasksListLength).toEqual(2);
    });
    test('Check if a li child is removed', () => {
      removeTask(0);
      taskList.innerHTML = '';
      const tasks = Store.getTasks();
      tasks.forEach((task) => {
        taskList.innerHTML += `
          <li class="${task.completed}">${task.description}</li>
        `;
      });
      const tasksListLength = taskList.children.length;
      expect(tasksListLength).toEqual(1);
    });
  });
});