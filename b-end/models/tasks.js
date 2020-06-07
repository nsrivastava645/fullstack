const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskname: {
        type: String,
        required: true,
        unique: true
    },
    when: {
        type: Date,
        required: true
    },
    // : {
    //     type: String,
    //     required: true
    // }
}, {
    timestamps: true
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;