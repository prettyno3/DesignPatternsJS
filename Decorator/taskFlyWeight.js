var FlyWeightFactory = require('./flyWeightFactory');

var Task = function(data){
    this.flyWeight = FlyWeightFactory.get(data.project, data.priority, data.user, data.completed);
    this.name = data.name;
}

module.exports = Task;