const {MongoClient, ObjectId} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';

MongoClient.connect(dbUrl, (err, client) => {
  if(err){
    return console.log('Unable to connect to db')
  }
  const db = client.db(dbName);

  db.collection('Todo').insert({
    task: 'First Tast',
    status: 'completed'
  });

  db.collection('User').insert({
    name: 'Saravanan',
    age: 25,
    location: 'chennai'
  });

  client.close();
});

//es6 object restructuring
var user = {name:"Saran", age:20};
var {name} = user;
console.log(name, new ObjectId());
