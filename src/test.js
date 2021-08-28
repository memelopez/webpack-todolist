import Task from './task';
import Store from './store';
import removeTask from './removeTask';
import updateTask from './updateTask';
import taskCompleted from './checkboxes';
import clearCompleted from './clearCompleted';

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

describe('For Editing Tasks', () => {
  describe('updateTask method from independient JS file', () => {
    test('One task is already initialized', () => {
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(1);
    });

    test('The description changes', () => {
      const newDescription = 'This the new description';
      updateTask(0, newDescription);
      const tasks = Store.getTasks();
      expect(tasks[0].description).toEqual(newDescription);
    });

    test('The new description persists', () => {
      const newDescription = 'This the new description';
      const tasks = Store.getTasks();
      expect(tasks[0].description).toEqual(newDescription);
    });

    test('The new description might be empty', () => {
      const newDescription = '';
      updateTask(0, newDescription);
      const tasks = Store.getTasks();
      expect(tasks[0].description).toEqual(newDescription);
    });
  });
});

describe('For Updating Tasks.completed Status', () => {
  describe('taskCompleted method from independient JS file', () => {
    test('One task is already initialized', () => {
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(1);
    });

    test('Initial completed value is false', () => {
      const tasks = Store.getTasks();
      const tasksCompleted = tasks[0].completed;
      expect(tasksCompleted).toEqual(false);
    });

    test('Completed value can change from false to true', () => {
      const idTask = 0;
      const newBooleanValue = true;
      taskCompleted(idTask, newBooleanValue);
      const tasks = Store.getTasks();
      expect(tasks[idTask].completed).toEqual(newBooleanValue);
    });

    test('The new completed value persists', () => {
      const idTask = 0;
      const newBooleanValue = true;
      const tasks = Store.getTasks();
      expect(tasks[idTask].completed).toEqual(newBooleanValue);
    });

    test('The new completed value can change again', () => {
      const idTask = 0;
      const newBooleanValue = false;
      taskCompleted(idTask, newBooleanValue);
      const tasks = Store.getTasks();
      expect(tasks[idTask].completed).toEqual(newBooleanValue);
    });
  });
});

describe('For Clear All Completed Tasks', () => {
  describe('clearCompleted method from independient JS file', () => {
    test('Four task are already initialized', () => {
      const tasksOne = new Task('This is a description', false, 1);
      const taskTwo = new Task('This is another description', false, 2);
      const taskThree = new Task('This is another description', false, 3);
      Store.addTask(tasksOne);
      Store.addTask(taskTwo);
      Store.addTask(taskThree);
      const tasks = Store.getTasks();
      const tasksListLength = tasks.length;
      expect(tasksListLength).toEqual(4);
    });

    test('Two tasks completed value are false', () => {
      const idTask = 0;
      const idTaskTwo = 2;
      const newBooleanValue = true;
      taskCompleted(idTask, newBooleanValue);
      taskCompleted(idTaskTwo, newBooleanValue);
      const tasks = Store.getTasks();
      const allCompletedTasks = tasks.filter((task) => task.completed === newBooleanValue);
      expect(allCompletedTasks.length).toEqual(2);
    });

    test('All completed tasks persist its value', () => {
      const newBooleanValue = true;
      const tasks = Store.getTasks();
      const allCompletedTasks = tasks.filter((task) => task.completed === newBooleanValue);
      expect(allCompletedTasks.length).toEqual(2);
    });

    test('All completed tasks can be removed', () => {
      clearCompleted();
      const tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });

    test('All uncompleted tasks persist', () => {
      const tasks = Store.getTasks();
      const allCompletedTasks = tasks.filter((task) => task.completed === false);
      expect(tasks.length).toEqual(allCompletedTasks.length);
    });
  });
});