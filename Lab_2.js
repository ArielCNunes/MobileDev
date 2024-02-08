"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q3_1 = require("./Q3");
// Array
var tasks = [];
// Instance of class
var task = new Q3_1.TaskClass();
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
