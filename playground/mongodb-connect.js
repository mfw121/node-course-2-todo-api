//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    
    console.log('Connected to MongoDB server');

    //const database = db.db('TodoApp');

    // database.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });

    // database.collection('Users').insertOne({
    //     name: 'Faisal',
    //     age: 24,
    //     location: 'Karachi'
    // }, (err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Users', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});