var repository = function(){
    var get = function(id){
        console.log('Getting user: ' + id);
        return {
            name: 'new user from db'
        };
    };
    var save = function(user){
        console.log('Saving user: '+user.name+' to db');
    };

    return {
        get: get,
        save: save
    }
}();

module.exports = repository;