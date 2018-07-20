var Mediator = function(){
    this.channels = {};
};


Mediator.prototype.subscribe = function(channel, context, func){
    if(!this.channels[channel]){
        this.channels[channel]=[];
    }
    this.channels[channel].push({
        context:context,
        func:func
    });
}

Mediator.prototype.publish = function(channel){
    if(!this.channels[channel]){
        return false;
    }
    // remove fisrt args which is channel name
    var args = Array.prototype.slice.call(arguments,1);
    for(var i=0; i<this.channels[channel].length;i++){
        var sub = this.channels[channel][i];
        sub.func.apply(sub.context, args);

    }
}

module.exports = Mediator;