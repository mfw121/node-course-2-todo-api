const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
   
    console.log('Connected to MongoDB server');
    const database = db.db('TodoApp');
    
    database.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b44be274f82253d814075a0')
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
   

    //db.close();
});