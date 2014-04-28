/*
 * template module
 * use this to following standard js conventions and practices

 */

/*jslint
 browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : true
 */

/*global $, viewStore */

viewStore = (function () {

//------------BEGIN MODULE SCOPE VARIABLES---------
    var htmlString ='<div class="spa-shell-head navbar navbar-default navbar-fixed-top" role="navigation">'
            + '<div class="container-fluid">'
            +    '<div class="navbar-header">'
            +        '<i class="fa fa-chevron-circle-down fa-lg navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"></i>'
            +        '<div class="spa-shell-head-logo"></div>'
            +        '<div class="spa-shell-head-brand">'
            +            '<a class="navbar-brand" href="#">Servo Controller</a>'
            +        '</div>'
            +    '</div>'
            +
                '<div class="navbar-collapse collapse">'
            +        '<ul class="nav navbar-nav">'
            +            '<li>'
            +            '<a class="active" href="/">'
            +                    '<i class="fa fa-home fa-lg"></i> home'
            +                '</a>'
            +            '</li>'
            +            '<li>'
            +                '<a href="#">'
            +                    '<i class="fa fa-info-circle fa-lg"></i> about'
            +                '</a>'
            +            '</li>'
            +        '</ul>'


            +        '<div class="spa-shell-head-auth navbar-right">'
            +            '<form action="/login" class="navbar-form" role="form" method="post">'
            +                '<div class="form-group">'
            +                    '<input type="text" placeholder="username" class="form-control" required />'
            +                '</div>'
            +                '<div class="form-group">'
            +                    '<input type="password" placeholder="Password" class="form-control" required />'
            +                '</div>'
            +                '<button type="submit" class="btn btn-success">'
            +                    '<i class="fa fa-unlock-alt fa-lg"></i>'
            +                'log in</button>'
            +            '</form>'
            +        '</div>'
            +    '</div>'
            + '</div><!--close container div-->'
        + '</div>'
        + '<div class="spa-shell-main container-fluid">'
        +        '<div class="spa-shell-main-audioPlaylist"></div>'
        +        '<div class="spa-shell-main-gpioGrid"></div>'
        +        '<div class="spa-shell-main-welcome spa-x-closed"></div>'
        +        '<div class="spa-shell-main-serverStats"></div>'
        + '</div>'
        + '<div class="spa-shell-foot navbar navbar-default navbar-fixed-bottom" role="navigation">'
        + '<div class="container-fluid">'
        +    '<div class="navbar-header">'
        +        '<i class="fa fa-chevron-circle-up fa-lg navbar-toggle" data-toggle="collapse" data-target=".footer-collapse"></i>'
        +        '<a class="spa-shell-foot-productInfo navbar-text" href="http://www.github.com/rihbyne">'
        +            '<i class="fa fa-github fa-lg"></i> rihbyne'
        +        '</a>'
        +    '</div>'
        +    '<div class="footer-collapse collapse">'
        +    '<div class="spa-shell-foot-audioStream"></div>'
        +    '<div class="spa-shell-foot-msglog"></div>'
        +    '<div id="msglog-btn" class="navbar-form navbar-right">'
        +        '<button class="btn btn-sm btn-warning">'
        +            '<i class="fa fa-envelope fa-lg"></i> msglog'
        +        '</button>'
        +    '</div>'
        +    '</div>'
        + '</div>'
        +'</div>',
        getHtml;
//-----------END MODULE SCOPE VARIABLES------------

//-----------BEGIN UTILITY METHODS-----------------
// begin defining getTrimmedString method
   getHtml = function () {
       return htmlString;
   };
//-----------END UTILITY METHODS-------------------

  return {
        getTrimmedString : getHtml
    };

}());