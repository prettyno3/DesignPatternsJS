var repo = function(){
    var called = 0;
    var save = function(task){
        called++;
        console.log('Saving '+task.name+' called '+called+' times')
    }
    console.log('new task repo');
    return {
        save:save
    };
}();

module.exports = repo;