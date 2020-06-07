const Task = require('../models/tasks');

module.exports.home = async function(req, res){
    Task.find({}, function(err, data){
        return res.json(data);
    })
}