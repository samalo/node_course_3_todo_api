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

// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

 //deleteOne
//  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
//  });

 //findOneAndDelete
//  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//    console.log(result);
//  });

//  db.collection('Users1').deleteMany({lastName: 'Mhondiwas'}).then((result) => {   console.log(result);
//  });

  db.collection('Users1').findOneAndDelete({_id: new ObjectID("5cb9ffc96a8753b62501c2d4")}).then((result) => {
  console.log(result);
 });
  
   //client.close();
});

