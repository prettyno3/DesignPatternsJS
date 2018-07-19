var Task = require('./task');

var UrgentTask = function(name, priority){
    Task.call(this, name);
    this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function(){
    console.log('Notifying important people');
};

UrgentTask.prototype.save = function(){
    console.log('Saving from urgent task');
    Task.prototype.save.call(this);
};

module.exports = UrgentTask;