var Task = require('./taskFacade');
var TaskService = require('./serviceFacade');

var myTask = new Task({
    name: 'my task',
    priority: 1,
    project: 'test project',
    user: 'zhenrong',
    complete: false
});

var TaskServiceWrapper = function(task){
    var completeAndNotify = function(task){
        TaskService.complete(task);
        if(task.completed){
            TaskService.setComplete(task);
            TaskService.notify(task, task.user);
            TaskService.save(task);
        }
    }
    return{
        completeAndNotify: completeAndNotify
    }
}();

// TaskService.complete(myTask);
// if(myTask.completed){
//     TaskService.setComplete(myTask);
//     TaskService.notify(myTask, myTask.user);
//     TaskService.save(myTask);
// }

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
