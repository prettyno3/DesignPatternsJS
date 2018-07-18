var Task = require('./task');
var RepoFactory = require('./repoFactorywList');

var task1 = new Task(RepoFactory.getRepo('task').get(1));
var task1 = new Task(RepoFactory.getRepo('task').get(2));

var user = RepoFactory.getRepo('user').get(1);
var project = RepoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();