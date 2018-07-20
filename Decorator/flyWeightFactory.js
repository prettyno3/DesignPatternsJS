// FlyWeight only used by FlyWeightFactory
var FlyWeight = function(project, priority, user, completed){
    this.project = project,
    this.priority = priority,
    this.user = user,
    this.completed = completed
}

var FlyWeightFactory = function(){
    var flyWeights = {};
    var get = function(project, priority, user, completed){
        if(!flyWeights[project+priority+user+completed]){
            flyWeights[project+priority+user+completed] = new FlyWeight(project, priority, user, completed);
        }
        return flyWeights[project+priority+user+completed];
    }
    var getCount = function(){
        var count = 0;
        for(var f in flyWeights) count++;
        return count;
    };

    return {
        get: get,
        getCount: getCount
    }
}();

module.exports = FlyWeightFactory;