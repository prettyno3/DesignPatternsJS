var Task = require('./taskClass');

var task1 = new Task({name: 'Create a sample task 1'});
var task2 = new Task({name: 'Create a sample task 2'});

task1.save();
task2.save();

task1.complete();
task2.complete();