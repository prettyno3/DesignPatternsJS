var repository = function(){
    var get = function(id){
        console.log('Getting project: ' + id);
        return {
            name: 'new project from db'
        };
    };
    var save = function(project){
        console.log('Saving project: '+project.name+' to db');
    };

    return {
        get: get,
        save: save
    }
}();

module.exports = repository;