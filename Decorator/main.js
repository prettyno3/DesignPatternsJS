var Task = require('./task');
var UrgentTask = require('./urgentTask');

var myTask = new Task('Decorator task');

myTask.complete();
myTask.save();

var myUrgentTask = new UrgentTask('Urgent task', 1);

myUrgentTask.complete();
myUrgentTask.save();
myUrgentTask.notify();