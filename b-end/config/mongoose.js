const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Neeraj:8700261067@Ns@cluster0-icfs9.mongodb.net/db?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
