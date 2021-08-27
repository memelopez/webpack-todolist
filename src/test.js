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
});