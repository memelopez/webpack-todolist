import Task from './task';
import Store from './store';
import UI from './ui';
import removeTask from './removeTask';

const eventMock = {
  preventDefault: () => {},
  target: {
    getElementsByTagName: () => [{ value: 'Mock' }],
  },
};
class mockLocalStorage {
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
global.localStorage = new mockLocalStorage();

describe('For Adding Tasks', () => {
  describe('addTask method from Store class', () => {
    test('Empty list is initialized', () => {
      let tasks = Store.getTasks();
      expect(tasks.length).toEqual(0);
    });
    test('Check Tasks length after adding two taks', () => {
      let tasksOne = new Task("This is a description", false, 0);
      let taskTwo = new Task("This is another description", false, 1);
      Store.addTask(tasksOne);
      Store.addTask(taskTwo);
      let tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
    test('Try to store an empty task, the Tasks length would be the same', () => {
      let taskEmpty = new Task();
      Store.addTask(taskEmpty);
      let tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
    test('Try to store when one argument is missing the Tasks length would be the same', () => {
      let taskEmpty = new Task("Another great description");
      Store.addTask(taskEmpty);
      let tasks = Store.getTasks();
      expect(tasks.length).toEqual(2);
    });
  });

  describe('HTML elements appears when showing the tasks', () => {
    let taskList = document.createElement('ul');
    beforeEach(() => {
        taskList.innerHTML = ""
        let tasks = Store.getTasks();
        tasks.forEach((task, index) => {
          taskList.innerHTML += `
            <li class="${task.completed}">${task.description}</li>
          `
        });
    });
    test('Check if li children are counted', () => {
      let tasksListLength = taskList.children.length
      expect(tasksListLength).toEqual(2);
    });
    test('Check if children class are according the completed status', () => {
      let statusCompleted = taskList.children[0].classList[0]
      expect(statusCompleted).toEqual("false");
    });
    test('Check if children value is according to description text', () => {
      let tasks = Store.getTasks();
      let textValueTaskOne = taskList.children[0].textContent
      expect(textValueTaskOne).toEqual(tasks[0].description);
    });
  });
});