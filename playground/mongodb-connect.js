//const MongoClient = require('mongodb').MongoClient;

//Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp1', (err, client) => {
  
   if(err){
     return console.log('Unable to connect to mongoDBserver');
   }

   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp1');

  //  db.collection('Todos').insertOne({
  //     test: 'Something to do',
  //     completed: false
  //  }, (err, result) => {

  //   if(err){
  //     return console.log('Unable to insert todos', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //  });

  //  db.collection('Users1').insertOne({
  //      firstName: 'Sam',
  //      lastName: 'Mhondiwas',
  //      location: 'Cape Town'
  //  }, (err, result) => {
  //     if(err){
  //       return console.log('Unable to inser users')
  //     }

  //     console.log(result.ops[0]._id.getTimestamp());
  //  });

   client.close();
});

