import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask('Buy groceries');
myTodos.addTask('Walk the dog');
myTodos.addTask('Learn ES6 modules');

myTodos.completeTask(1);

console.log('Current Todo List:');
myTodos.listTasks().forEach(task =>
  console.log(
    `[#${task.index}] ${task.description} – ${
      task.completed ? ' Completed' : ' Pending'
    }`
  )
);
