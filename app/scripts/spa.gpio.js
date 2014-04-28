/*
 * template module
 * use this to following standard js conventions and practices

 */

/*jslint
 browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : true,
 white : true
 */

/*global $, spa */

spa.gpio = (function () {

//------------BEGIN MODULE SCOPE VARIABLES---------
    var
        configMap = {
            mainHtml: String()
            +'<ul id="gpio" class="nav nav-stacked">'
            +'<li>'
                + '<label><i class="fa fa-fw fa-repeat fa-spin"></i></label>'
                +'<label class="btn btn-primary">gpio11 <i class="fa fa-cog fa-spin"></i></label>'
                +'<div class="btn-group col-sm-offset-2" data-toggle="buttons">'
                +'<label id="gpio11-h" class="btn btn-success">'
                 +'<i class="fa fa-power-off"></i> high'
                 +'<input type="radio" name="option">'
                +'</label>'
                +'<label id="gpio11-l" class="btn btn-danger">'
                  +'<i class="fa fa-power-off"></i> low'
                  +'<input type="radio" name="option">'
                +'</label>'
                +'</div>'
            +'</li>'
            +'<li>'
                +'<label><i class="fa fa-fw fa-repeat fa-spin"></i></label>'
                    +'<label class="btn btn-primary">gpio12 <i class="fa fa-cog fa-spin"></i></label>'
                    +'<div class="btn-group col-sm-offset-2" data-toggle="buttons">'
                    +'<label id="gpio12-h" class="btn btn-success">'
                    +'<i class="fa fa-power-off"></i> high'
                    +'<input type="radio" name="option">'
                    +'</label>'
                    +'<label id="gpio12-l" class="btn btn-danger">'
                    +'<i class="fa fa-power-off"></i> low'
                    +'<input type="radio" name="option">'
                    +'</label>'
                    +'</div>'
             +'</li>'
             +'<li>'
                +'<label><i class="fa fa-fw fa-repeat fa-spin"></i></label>'
                    +'<label class="btn btn-primary">gpio13 <i class="fa fa-cog fa-spin"></i></label>'
                    +'<div class="btn-group col-sm-offset-2" data-toggle="buttons">'
                    +'<label id="gpio13-h" class="btn btn-success">'
                    +'<i class="fa fa-power-off"></i> high'
                    +'<input type="radio" name="option">'
                    +'</label>'
                    +'<label id="gpio13-l" class="btn btn-danger">'
                    +'<i class="fa fa-power-off"></i> low'
                    +'<input type="radio" name="option">'
                    +'</label>'
                    +'</div>'
                    +'</li>'
                +'<li>'
                +'<label><i class="fa fa-fw fa-repeat fa-spin"></i></label>'
                    +'<label class="btn btn-primary">gpio15 <i class="fa fa-cog fa-spin"></i></label>'
                    +'<div class="btn-group col-sm-offset-2" data-toggle="buttons">'
                    +'<label id="gpio15-h" class="btn btn-success">'
                    +'<i class="fa fa-power-off"></i> high'
                    +'<input type="radio" name="option">'
                    +'</label>'
                    +'<label id="gpio15-l" class="btn btn-danger">'
                    +'<i class="fa fa-power-off"></i> low'
                    +'<input type="radio" name="option">'
                    +'</label>'
                    +'</div>'
                    +'</li>'
                + '<li>'
                +'<label><i class="fa fa-fw fa-repeat fa-spin"></i></label>'
                +'<label class="btn btn-primary">gpio16 <i class="fa fa-cog fa-spin"></i></label>'
                +'<div class="btn-group col-sm-offset-2" data-toggle="buttons">'
                +'<label id="gpio16-h" class="btn btn-success">'
                +'<i class="fa fa-power-off"></i> high'
                +'<input type="radio" name="option">'
                +'</label>'
                +'<label id="gpio16-l" class="btn btn-danger">'
                +'<i class="fa fa-power-off"></i> low'
                +'<input type="radio" name="option">'
                +'</label>'
                +'</div>'
                +'</li>'
                +'<li>'
                +'<label><i class="fa fa-fw fa-repeat fa-spin"></i></label>'
                +'<label class="btn btn-primary">gpio18 <i class="fa fa-cog fa-spin"></i></label>'
                +'<div class="btn-group col-sm-offset-2" data-toggle="buttons">'
                +'<label id="gpio18-h" class="btn btn-success">'
                +'<i class="fa fa-power-off"></i> high'
                +'<input type="radio" name="option">'
                +'</label>'
                +'<label id="gpio18-l" class="btn btn-danger">'
                +'<i class="fa fa-power-off"></i> low'
                +'<input type="radio" name="option">'
                +'</label>'
                +'</div>'
                +'</li>'
                +'<li>'
                +'<label><i class="fa fa-fw fa-repeat fa-spin"></i></label>'
                +'<label class="btn btn-primary">gpio22 <i class="fa fa-cog fa-spin"></i></label>'
                +'<div class="btn-group col-sm-offset-2" data-toggle="buttons">'
                +'<label id="gpio22-h" class="btn btn-success">'
                +'<i class="fa fa-power-off"></i> high'
                +'<input type="radio" name="option">'
                +'</label>'
                +'<label id="gpio22-l" class="btn btn-danger">'
                +'<i class="fa fa-power-off"></i> low'
                +'<input type="radio" name="option">'
                +'</label>'
                +'</div>'
                +'</li>'
            +'</ul>',
            settable_map : {}
        },
        serverConfig = { domain : '192.168.1.5', port: 3030 },
        stateMap = { $container : null},
        jqueryMap = {},

        assembleAsyncReq,setJqueryMap, configModule,initModule;
//-----------END MODULE SCOPE VARIABLES------------

//-----------BEGIN UTILITY METHODS-----------------
/*This method focuses on joining all the essential parts required for
 * performing ajax calls to control server middleware. */
    assembleAsyncReq = function(pin, signal) {
        $.ajax({
            type: "GET",
            cache: false,
            url:'http://'+serverConfig.domain+':'+serverConfig.port+'/gpio/'+pin+'/output/'+signal,
            dataType: 'json',
            success: function(data) {
                console.log("gets here");
            }
        });

    };
//-----------END UTILITY METHODS-------------------

//-----------BEGIN DOM METHODS---------------------
// BEGIN DOM  method  /setJqueryMap/
    setJqueryMap = function () {
        var $container = stateMap.$container;

        jqueryMap = { $container : $container };
    };


// END DOM METHOD /setJqueryMap/
//-----------END DOM METHODS-----------------------

//-----------BEGIN EVENT HANDLERS-----------------
// example: onClickButton = ...
//-----------END EVENT HANDLERS--------------------


//-----------START PUBLIC METHODS------------------

    configModule = function (input_map) {
        /*
        spa.butil.setConfigMap({
            input_map : input_map,
            settable_map : configMap.settable_map,
            config_map : configMap
        });
        */
        return true;
    };
    // End public method /configModule/

    // Begin public method /initModule/
    // Purpose  :Initialize a module
    // Arguments    :
    //  * $container the jquery element used by  this feature
    // Returns  : true
    // Throws   : non-accidental
    //
    initModule = function ( $container ) {
        $container.html(configMap.mainHtml);
        stateMap.$container = $container;
        setJqueryMap();

        $('#gpio11-h').click(function () {
            assembleAsyncReq(11,1);
            //$('#gpio').children().eq(0).('<label><i class="fa fa-fw fa-repeat fa-spin"></i></label>');
        });
        $('#gpio11-l').click(function () {
            assembleAsyncReq(11,0);
        });
        $('#gpio12-h').click(function () {
            assembleAsyncReq(12,1);
        });
        $('#gpio12-l').click(function () {
            assembleAsyncReq(12,0);
        });
        $('#gpio13-h').click(function () {
            assembleAsyncReq(13,1);
        });
        $('#gpio13-l').click(function () {
            assembleAsyncReq(13,0);
        });
        $('#gpio15-h').click(function () {
            assembleAsyncReq(15,1);
        });
        $('#gpio15-l').click(function () {
            assembleAsyncReq(15,0);
        });
        $('#gpio16-h').click(function () {
            assembleAsyncReq(16,1);
        });
        $('#gpio16-l').click(function () {
            assembleAsyncReq(16,0);
        });
        $('#gpio18-h').click(function () {
            assembleAsyncReq(18,1);
        });
        $('#gpio18-l').click(function () {
            assembleAsyncReq(18,0);
        });
        $('#gpio22-h').click(function () {
            assembleAsyncReq(22,1);
        });
        $('#gpio22-l').click(function () {
            assembleAsyncReq(22,0);
        });

    };
    //End public method /initModule/

    //return public methods
    return {
        configModule : configModule,
        initModule : initModule
    };
//-------------------END PUBLIC METHODS------------------
}());

