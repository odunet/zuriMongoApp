const mongoose = require('mongoose');

//Create newSchema (async)
const taskSchema = new mongoose.Schema({
  id: Number,
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  author: {
    type: String,
    enum: ['festus', 'nosa', 'ayo', 'tosin', 'tiwa'],
    default: 'imwatero',
  },
  description: String,
  category: String,
  purchaseCount: Number,
  imageUrl: String,
  tags: Array,
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
