var repoFactory = function(){
    var getRepo = function(repoType){
        if(repoType==='task'){
            var taskRepo = require('./taskRepository');
            return taskRepo;
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