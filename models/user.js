'use strict';
// app/models/user.js
//This module defines the schema.It makes use model class
// to build(contruct) documents in mongodb

//---------------declare module scope variables--------------
var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs'),
    userSchema;

//--------------end module scope variable declaration--------

//----------define the schema for our user model-------------
userSchema = mongoose.Schema({

    local            : {
        email        : String,
        username     : String,
        password     : String
      }

    });

//----------end schema definition----------------------------

//----------define methods which describe the schema---------
userSchema.methods.generateHash = function  (password) {
    return bcrypt.hashSync(password, bcrypt.genSlatSync(8), null);
  };

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
