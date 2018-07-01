const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppMongoose')

var TodoApp = mongoose.model('Todos',{
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

var TodoAppIns = new TodoApp({
  task: "   Third Task   "
});

/*TodoAppIns.save().then((docs) => {
  console.log(docs);
}, (err) => {
  console.log(err);
});*/

//User model
var Users = mongoose.model('Users',{
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
})

var UsersInstance = new Users({
  email: "lettertosaran@gmail.com"
});

UsersInstance.save().then((docs) => {
  console.log("User saved successfully", docs);
}, (err) => {
  console.log("User not saved", err);
});
