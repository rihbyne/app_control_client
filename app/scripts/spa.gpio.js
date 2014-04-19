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
            +'<button class="btn btn-primary">Gpio Pin 11</button>'
            +'<button id="gpio11-h" class="btn btn-success">high [1]</button>'
            +'<button id="gpio11-l" class="btn btn-danger">low [0]</button><br>'
                +'<button class="btn btn-primary">Gpio Pin 12</button>'
                +'<button id="gpio12-h" class="btn btn-success">high [1]</button>'
                +'<button id="gpio12-l" class="btn btn-danger">low [0]</button><br>'
                +'<button class="btn btn-primary">Gpio Pin 13</button>'
                +'<button id="gpio13-h" class="btn btn-success">high [1]</button>'
                +'<button id="gpio13-l" class="btn btn-danger">low [0]</button><br>'
                +'<button class="btn btn-primary">Gpio Pin 15</button>'
                +'<button id="gpio15-h" class="btn btn-success">high [1]</button>'
                +'<button id="gpio15-l" class="btn btn-danger">low [0]</button><br>'
                +'<button class="btn btn-primary">Gpio Pin 16</button>'
                +'<button id="gpio16-h" class="btn btn-success">high [1]</button>'
                +'<button id="gpio16-l" class="btn btn-danger">low [0]</button><br>'
                +'<button class="btn btn-primary">Gpio Pin 18</button>'
                +'<button id="gpio18-h" class="btn btn-success">high[1]</button>'
                +'<button id="gpio18-l" class="btn btn-danger">low[0]</button><br>'
                +'<button class="btn btn-primary">Gpio Pin 22</button>'
                +'<button id="gpio22-h" class="btn btn-success">high[1]</button>'
                +'<button id="gpio22-l" class="btn btn-danger">low[0]</button>',
            settable_map : {}
        },

        stateMap = { $container : null},
        jqueryMap = {},

        setJqueryMap, configModule,initModule;
//-----------END MODULE SCOPE VARIABLES------------

//-----------BEGIN UTILITY METHODS-----------------
// example: getTrimmedString
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
            $.ajax({
                type: "GET",
                url:'http://localhost:3030/gpio/11/output/1',
                dataType: 'json',
                success: function(data) {
                    alert("helco");
                }
            });
        });
        $('#gpio11-l').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/11/output/0',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio12-h').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/12/output/1',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio12-l').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/12/output/0',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio13-h').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/13/output/1',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio13-l').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/13/output/0',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio15-h').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/15/output/1',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio15-l').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/15/output/0',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio16-h').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/16/output/1',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio16-l').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/16/output/0',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio18-h').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/18/output/1',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio18-l').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/18/output/0',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio22-h').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/22/output/1',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
        });
        $('#gpio22-l').click(function () {
            $.ajax({
                type: "GET",
                url:'http://192.168.1.5:3030/gpio/22/output/0',
                dataType: 'json',
                success: function() {
                    console.log("done");
                }
            });
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

