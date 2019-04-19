//const MongoClient = require('mongodb').MongoClient;

//Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp1', (err, client) => {
  
   if(err){
     return console.log('Unable to connect to mongoDBserver');
   }

   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp1');
   
  //  db.collection('Todos').find({
  //   _id: new ObjectID('5cafb8f69525fb1dd8a046f7') 
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //  }, (err) => {
  //    console.log('Unable to fetch todos', err);
  //  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
   }, (err) => {
     console.log('Unable to fetch todos', err);
   });
  
   //client.close();
});

