const {MongoClient, ObjectId} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';

MongoClient.connect(dbUrl, (err, client) => {
  if(err){
    return console.log('Unable to connect to db')
  }
  const db = client.db(dbName);

  //update with $set operator
  db.collection('Todo').findOneAndUpdate({
    _id: new ObjectId('5b2d385366397f1b2b82747c')
  },{
    $set: {status: 1}
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //update with $inc operator
  db.collection('User').findOneAndUpdate({
    "_id" : new ObjectId("5b2d385366397f1b2b82747d")
  },{
    $set: {name: "saran"},
    $inc: {age: 2}
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
