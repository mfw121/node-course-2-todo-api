const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
   
    console.log('Connected to MongoDB server');
    const database = db.db('TodoApp');
    
    //deleteMany
    // database.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //deleteOne
    // database.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    database.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });
   

    //db.close();
});