/*
* routes.js
* This module routes the requested URL to its appropiate logic
* functions
*/
/*jslint
        browser : true, continue : true,
        devel : true, indent : 2, maxerr : 50,
        newcap : true, nomen : true, plusplus : true,
        regexp : true, sloppy : true, vars : false,
        white : true
*/
/*global $, spa */
//-----------BEGIN MODUEL LEVEL VARIABLES-----------------
'use strict';
var checkAuth = require('./controllers/checkAuth'),
    index = require('./controllers'),
    configRoutes;
//-----------END MODULE SCOPE VARIABLES-------------------

//-----------BEGIN PUBLIC METHODS--------------------------
/**
 * Application routes
 */
configRoutes = function(app, passport) {


  // All other routes to use Angular routing in app/scripts/app.js
    app.get('/*', index.index);

    app.post('/login', function  (req, res) {
      
    });

    app.get('/gpiofarm/', checkAuth.isLoggedIn, function  (req, res) {
      
    });

    app.get('/logout', function  (req, res) {
      req.logout();
      res.redirect('/');

    });

    app.all('/:obj_type/*?', function (req, res, next) {
        res.contentType( 'json' );
        next();
      });

    app.get('/:obj_type/list', function (req, res) {
        res.send({ title: 'user list' });
      });

    app.post('/:obj_type/create', function (req, res) {
        res.send({ title: 'user created'});
      });

    app.get('/:obj_type/read/:id([0-9]+)',function (req, res) {
        res.send(
            {title: 'User with id'+ req.params.id +'found.'}
        );
      });

    app.post('/:obj_type/update/:id([0-9]+)',function (req,res) {
        res.send(
            {title: 'user with id'+ req.params.id + ' updated'}
        );
      });

    app.get('/:obj_type/delete:id([0-9]+)',function (req,res) {
        res.send(
            {title: 'user with id'+ req.params.id + 'deleted'}
        );
      });
  };

module.exports = { configRoutes : configRoutes };
//---------------END PUBLIC METHODS-------------------------
