const MongoClient =  require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    db = client.db('TodoApp');
if(err) {
    return console.log('connection error'+err);
}
console.log('connected to db');

db.collection('todos').insertOne({
    text:'inserttwo',
    completed: true
}, (err, result) => {
    if(err) {
        console.log('error inserting '+err);
    }
    console.log('result'+JSON.stringify(result.ops));
});
client.close();
});
