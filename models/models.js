const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  todo: String,
  isComplete: Boolean,
});

const task = mongoose.model('task', TaskSchema);

module.exports = task;
