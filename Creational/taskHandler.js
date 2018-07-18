
SingletonRepo = require('./singletonRepo');

var myRepo = SingletonRepo();

var taskHandler = function(){
    return {
        save: function(){
            // SingletonRepo.save({name:'save from handler'});
            myRepo.save({name:'save from handler'});
        }
    };
}();

module.exports = taskHandler;