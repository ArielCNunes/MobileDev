// Part III
interface TaskInterface {
    tasks : Array<string>;
    addTask(word:string):number;
    deleteTask(task:string):number;
    listsAllTasks():void;
}

export class TaskClass implements TaskInterface {
    tasks : Array<string> = [];

    addTask = (word:string):number => {
        let length:number = this.tasks.push(word);
        console.log(word + " added to array.");
    
        return length;
    };

    deleteTask = (task:string):number => {
        // Find index
        let index : number = this.tasks.indexOf(task);
    
        // Check if elements exists
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log(task + " deleted from array.\n");
        } else {
            console.log(task + " is not in our array.\n");
        }
    
        // return number of elements
        return this.tasks.length;
    };

    listsAllTasks = () => {
        // Print all elements
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i]);
        }
    
        // Alternative way
        // tasks.forEach((item) => {
        //     console.log(tasks);
        // });
    }
}