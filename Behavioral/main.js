var Task = require('./task');
var Mediator = require('./mediator');

var notificationService = function(){
    var message = 'Notifying ';
    this.update = function(task){
        console.log(message+task.user+' for task '+task.name);
    }
}

var loggingService = function(){
    var message = 'Logging ';
    this.update = function(task){
        console.log(message+task.user+' for task '+task.name);
    }
}

var auditingService = function(){
    var message = 'Auditing ';
    this.update = function(task){
        console.log(message+task.user+' for task '+task.name);
    }
}

function ObserverList(){
    this.observerList = [];
}

ObserverList.prototype.add = function(obj){
    this.observerList.push(obj);
}

ObserverList.prototype.get = function(index){
    if(index>-1  && index<this.observerList.length){
        return this.observerList[index];
    }
}

ObserverList.prototype.count = function(index){
    return this.observerList.length;
}

var ObserverTask = function(data){
    Task.call(this,data);
    this.observers = new ObserverList();
}

ObserverTask.prototype.addObserver = function(observer){
    this.observers.add(observer);
}

ObserverTask.prototype.notify = function(context){
    var observerCount = this.observers.count();
    for(var i=0; i<observerCount; i++){
        this.observers.get(i)(context);
    }
}

ObserverTask.prototype.save = function(){
    this.notify(this);
    Task.prototype.save.call(this);
}

// task1 = new Task({name:'create a demo for constructors', user:'zhenrong'});
task1 = new ObserverTask({name:'create a demo for constructors', user:'zhenrong'});

var ns = new notificationService();
var ls = new loggingService();
var as = new auditingService();

//--------------------------------
// task1.save();

// ns.update();

//--------------------------------
// task1.addObserver(ns.update);
// task1.addObserver(ls.update);
// task1.addObserver(as.update);

// task1.save();

//--------------------------------

// var mediator = new Mediator();

// mediator.subscribe('complete', ns, ns.update);
// mediator.subscribe('complete', ls, ls.update);
// mediator.subscribe('complete', as, as.update);

// task1.complete = function(){
//     mediator.publish('complete', this);
//     Task.prototype.complete.call(this);
// }

// task1.complete();