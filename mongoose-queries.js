var {mongoose} = require('./server/db/mongoose');

const {Todo} = require('./server/model/todo');
const {User} = require('./server/model/user');

var id = '5b2e46e1172aa82f97446b55';
var userid = '5b2f5398515aa01f3ff7fae1';

Todo.find({
  _id: id
}).then((todos) => {
  console.log(todos);
}, (err) => {
  console.log(err);
});

Todo.findOne({
  completed: false
}).then((todos) => {
  console.log(todos);
}, (err) => {
  console.log(err);
});

Todo.findById(id).then((todo) => {
  console.log(todo);
}, (err) => {
  console.log(err);
});


User.findById(userid).then((user) => {
  console.log(user);
}, (e) => {
  console.log(e);
});
