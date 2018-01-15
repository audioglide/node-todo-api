// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a5c99b27c605a881ea21703')
    // }, {
    //         $set: {
    //             text: 'new text here',
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a5c847daaca47228831d65a')
    },{
        $set: {
            name: 'Alin'
        },
        $inc:{
            age:-10
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    db.close();
});
