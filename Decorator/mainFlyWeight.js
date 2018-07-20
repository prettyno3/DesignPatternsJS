var Task = require('./taskFacade');
var TaskCollection = require('./taskCollection');

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1,2,3,4,5];
var users = ['Jon', 'Eric', 'Dan', 'David'];
var complete = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for(var i=0; i<100000; i++){
    tasks.add({
        name: 'task'+i,
        priority: priorities[Math.floor(Math.random()*5)],
        project: projects[Math.floor(Math.random()*4)],
        user: users[Math.floor(Math.random()*4)],
        complete: complete[Math.floor(Math.random()*2)]
    });
}

var afterMemory = process.memoryUsage().heapUsed;

console.log('used memory ' + (afterMemory-initialMemory)/1000000);
console.log('tasks: '+tasks.getCount());