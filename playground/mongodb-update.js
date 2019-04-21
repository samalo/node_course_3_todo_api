//const MongoClient = require('mongodb').MongoClient;

//Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp1', (err, client) => {
  
   if(err){
     return console.log('Unable to connect to mongoDBserver');
   }

   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp1');
   
   
 //deleteMany

 db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5cb9fa3b6a8753b62501c0df')}, {
   $set: {
     completed: true
   }
 }, {
   returnOriginal: false
 })
 .then((result) => {
  console.log(result);
});


  
   //client.close();
});

