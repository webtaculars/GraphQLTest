import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
// if the connection to database is successful, in console will see:
// 'Connected to mongo server.'
mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});
// if server can not connect to the database:
// 'Could not connect to mongo server!' + errors
mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});
// example of connecting to MongoDB
// mongodb://username:password@host:port/myDataBase
mongoose.connect('mongodb://localhost:27017/graphqlTest');
