const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({query})

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5a60aedfee7bfa5d4d6249a3').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({_id: '5a60aedfee7bfa5d4d6249a3'}).then((todo)=>{
    console.log(todo);
});