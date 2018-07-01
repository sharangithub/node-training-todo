const mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  task: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
}
);

module.exports = {
  Todo
}
