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
