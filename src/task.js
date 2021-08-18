// Task Class: Represents a to-do
export default class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  task2string() {
    const srt = `Index: ${this.index} - Description: ${this.description} - Completed: ${this.completed} --`;
    return srt;
  }
}