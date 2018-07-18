Task = require('./task');
TaskHandler = require('./taskHandler');
SingletonRepo = require('./singletonRepo');

// var myRepo = SingletonRepo();
var myRepo = SingletonRepo;

myRepo.save({name:'from main'});
myRepo.save({name:'from main'});
myRepo.save({name:'from main'});
TaskHandler.save();
TaskHandler.save();
TaskHandler.save();
TaskHandler.save();