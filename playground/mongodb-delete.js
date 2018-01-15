// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteMany({text: 'Eat lunch'},function(error){
    //     if(error){
    //        console.log('Error: ', error);
    //     }
    // });

    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a5c97dc7c605a881ea215f3')}, function(error,result){
        if(error){
            console.log('Error: ', error);
        }
        console.log(result);
    })
    db.close();
});
