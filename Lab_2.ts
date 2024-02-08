import { TaskClass } from "./Q3"; // using methods in TaskClass

// Array
let tasks: string[] = [];

// Instance of class
let task = new TaskClass();

// Call methods
task.addTask("test");
task.addTask("test2");
task.addTask("test3");
console.log("Number of items in the array is " + task.addTask("test4") + "\n");

// Display all items
task.listsAllTasks();
console.log("");

// Delete
task.deleteTask("test3");

// Display all items again
task.listsAllTasks();
console.log("Number of items in the array is " + task.deleteTask("g") + "\n");
task.listsAllTasks();