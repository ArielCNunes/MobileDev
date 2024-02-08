"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskClass = void 0;
var TaskClass = /** @class */ (function () {
    function TaskClass() {
        var _this = this;
        this.tasks = [];
        this.addTask = function (word) {
            var length = _this.tasks.push(word);
            console.log(word + " added to array.");
            return length;
        };
        this.deleteTask = function (task) {
            // Find index
            var index = _this.tasks.indexOf(task);
            // Check if elements exists
            if (index > -1) {
                _this.tasks.splice(index, 1);
                console.log(task + " deleted from array.\n");
            }
            else {
                console.log(task + " is not in our array.\n");
            }
            // return number of elements
            return _this.tasks.length;
        };
        this.listsAllTasks = function () {
            // Print all elements
            for (var i = 0; i < _this.tasks.length; i++) {
                console.log(_this.tasks[i]);
            }
            // Alternative way
            // tasks.forEach((item) => {
            //     console.log(tasks);
            // });
        };
    }
    return TaskClass;
}());
exports.TaskClass = TaskClass;
