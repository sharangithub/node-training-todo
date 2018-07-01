const {MongoClient, ObjectId} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';

MongoClient.connect(dbUrl, (err, client) => {
  if(err){
    return console.log('Unable to connect to db')
  }
  const db = client.db(dbName);

  //Deleting all
  /*db.collection('Todo').deleteMany({task: 'delete check task'}).then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Unable to delete data');
  });*/

  //Deleting completed tasks
  /*db.collection('Todo').deleteOne({task: 'delete check task'}).then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Unable to delete data');
  });*/

  //Showing Deleted records based on Id
  db.collection('Todo').findOneAndDelete({
    _id: new ObjectId('5b2df268bb67a19455ed5a7e')
  }).then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Unable to delete data');
  });

  //client.close();
});
