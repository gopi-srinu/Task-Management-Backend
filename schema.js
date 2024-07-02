const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskId: Number,
    taskName: String,
    taskStatus: String,
    taskDescription: String,
    taskPrioritylevel: String,
    taskStartdate: String,
    taskEnddate: String
})

const model = mongoose.model('task', taskSchema);
module.exports = model;