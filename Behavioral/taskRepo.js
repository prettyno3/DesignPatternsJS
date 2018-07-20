var repo = {
    tasks: {},
    commands: [],
    get: function(id){
        console.log('Getting task '+id);
    },
    save: function(task){
        repo.tasks[task.id] = task;
        console.log('Saving '+task.name+' to the db');
    },
    replay: function(){
        for(var i=0; i<this.commands.length;i++){
            var command = this.commands[i];
            repo.excuteNolog(command.name,command.obj);
        }
    }
};

//apply without log for reply
repo.excuteNolog = function(name){
    var args = [].slice.call(arguments,1);
    if(repo[name]){
        return repo[name].apply(repo,args);
    }
};

repo.excute = function(name){
    var args = [].slice.call(arguments,1);
    //keep command history
    repo.commands.push({
        name: name,
        obj: args[0]
    });
    if(repo[name]){
        return repo[name].apply(repo,args);
    }
};

repo.excute('save',{
    id:1,
    name: 'Task 1',
    completed: false
});
repo.excute('save',{
    id:2,
    name: 'Task 2',
    completed: false
});
repo.excute('save',{
    id:3,
    name: 'Task 3',
    completed: false
});
repo.excute('save',{
    id:4,
    name: 'Task 4',
    completed: false
});

console.log(repo);
repo.tasks={};
console.log(repo);

repo.replay();
console.log(repo);