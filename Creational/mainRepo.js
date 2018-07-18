var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
var task2 = new Task({name:'repo task 2'});

task1.save();
task2.save();

task1.complete();
task2.complete();