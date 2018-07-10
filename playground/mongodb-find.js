//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    
    console.log('Connected to MongoDB server');

    const database = db.db('TodoApp');
    
    // database.collection('Todos').find({
    //     _id: new ObjectID('5b44b80e1bc87e1ebc3306f3')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    database.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });
   

    //db.close();
});