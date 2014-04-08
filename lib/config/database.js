var mongoose = require('mongoose'),
    url = 'mongodb://localhost/spa';
    

mongoose.connect(url);

var db = mongoose.connection;

//-------------provide connection status message-------
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("** connected to mongo database **");
});

//-------------end msg logging--------------------


module.exports = {
    //return connection string
    url: url
};
