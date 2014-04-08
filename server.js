'use strict';

var express = require('express');
var passport = require('passport');
var configDB = require('./lib/config/database');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('./lib/config/config');

var app = express();

//passport configuration
require('./lib/config/passport')(passport);

//Express settings
require('./lib/config/express')(app);

// Routing
require('./lib/routes').configRoutes(app, passport);

// Start server
app.listen(config.port, function () {
  console.log('Express server listening on port %d in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
