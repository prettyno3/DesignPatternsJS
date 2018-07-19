var TaskService = function(){
    return {
        complete: function(task){
            console.log('Completing task: '+task.name);
            task.completed=true;
        },
        setComplete: function(task){
            task.completeDate = new Date();
            console.log(task.name+' completed on '+task.completeDate);
        },
        notify: function(task,user){
            console.log('Notify '+user+' of the completion of '+task.name);
        },
        save: function(task){
            console.log('Saving task: '+task.name);
        }

    };
}();

module.exports = TaskService;