var repoFactory = function(){
    var getRepo = function(repoType){
        if(repoType==='task'){
            if(!this.taskRepo){
                console.log('create new task repository')
                this.taskRepo = require('./taskRepository');
            }
            return this.taskRepo;
        }
        if(repoType==='user'){
            var userRepo = require('./userRepository');
            return userRepo;
        }
        if(repoType==='project'){
            var projectRepo = require('./projectRepository');
            return projectRepo;
        }
    }

    return {
        getRepo: getRepo
    }
}();

module.exports = repoFactory;