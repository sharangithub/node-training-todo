const {MongoClient, ObjectId} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';

MongoClient.connect(dbUrl, (err, client) => {
  if(err){
    return console.log('Unable to connect to db')
  }
  const db = client.db(dbName);

  //fetching all
  db.collection('Todo').find().toArray().then((docs) => {
    console.log("All");
    console.log(docs);
  }, (err) => {
    console.log('Unable to fetch data');
  });

  //fetch completed tasks
  db.collection('Todo').find({status: 1}).toArray().then((docs) => {
    console.log("Completed");
    console.log(docs);
  }, (err) => {
    console.log('Unable to fetch data');
  });

  //completed count
  db.collection('Todo').find({status: 1}).count().then((count) => {
    console.log("Completed Count");
    console.log(count);
  }, (err) => {
    console.log('Unable to fetch data');
  });

  //fetch based on Id
  db.collection('Todo').find({
    _id: new ObjectId('5b2d3848f5b6381b168434db')
  }).toArray().then((docs) => {
    console.log("Id - 5b2d3848f5b6381b168434db,");
    console.log(docs);
  }, (err) => {
    console.log('Unable to fetch data');
  });

  //client.close();
});
