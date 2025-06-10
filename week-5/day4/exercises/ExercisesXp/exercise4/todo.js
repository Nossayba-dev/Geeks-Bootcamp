export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    this.tasks.push({ description, completed: false });
  }

  completeTask(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    } else {
      console.warn(`No task at index ${index}`);
    }
  }

  listTasks() {
    return this.tasks.map((t, i) => ({
      index: i,
      description: t.description,
      completed: t.completed
    }));
  }
}
