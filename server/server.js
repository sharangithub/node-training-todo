var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    task: req.body.text
  });
  todo.save().then((docs) => {
    res.status(200).send(docs);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos',(req, res) => {
  Todo.find().then((todos) => {
      res.status(200).send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //Id validation
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).send();
  } else {
    Todo.findById(id).then((todo) => {
      if(todo){
        res.status(200).send({todo});
      } else {
        res.status(404).send();
      }
    }, (err) => {
      res.status(400).send();
    });
  }

});

app.listen(port, () => {
  console.log(`Server started in ${port} port.``);
});
