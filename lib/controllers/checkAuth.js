'use strict';


exports.isLoggedIn = function  (req, res, next) {
    
    //if user is authenticated in the session,carry on
    if (req.isAuthenticated()) {
        return next();
    }

    //if they are not then redirect them to normal page
    res.redirect('/');
};