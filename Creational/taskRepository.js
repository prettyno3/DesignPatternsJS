var repository = function(){
    var get = function(id){
        console.log('Getting task: ' + id);
        return {
            name: 'new task from db'
        };
    };
    var save = function(task){
        console.log('Saving task: '+task.name+' to db');
    };

    return {
        get: get,
        save: save
    }
}();

module.exports = repository;