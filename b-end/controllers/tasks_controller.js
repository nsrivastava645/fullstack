const Task = require('../models/tasks');

module.exports.profile = async function(req, res){
    await Task.findById(req.params.id, function(err, data){
        return res.json(data);
    });
}
module.exports.destroy = async function(req, res){
    await Task.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log("error", err);
            return;
        }
        return res.json({'message':'Deleted'});
    });
}
module.exports.create = function(req, res){
    task = new Task({
        taskname: req.body.taskname,
        when: req.body.when,
    
    });

    task.save(()=>{
        res.json(task);
    });
}
module.exports.update = async function(req, res){
    await Task.findByIdAndUpdate(req.params.id, req.body);
    return res.json({'message':'Updated'});
}