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

spa.module = (function () {

//------------BEGIN MODULE SCOPE VARIABLES---------
  var
    configMap = {
        settable_map : { color_name:true},
        color_name : 'blue'
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
// Begin public method /configModule/
    // // Purpose  : Adjust configuration of allowed keys
    // // Arguments : A map of settable keys and values
    // * color_name - color to use
    // // Settings
    // * configMap.settable_map declares allowed keys
    // Returns : true
    // Throws  : none
    //

  configModule = function (input_map) {
        spa.butil.setConfigMap({
            input_map : input_map,
            settable_map : configMap.settable_map,
            config_map : configMap
          });
        return true;
      };
    // End public method /configModule/

    // Begin public method /initModule/
    // Purpose  :Initializea module
    // Arguments    :
    //  * $container the jquery element used by  this feature
    // Returns  : true
    // Throws   : nonaccidental
    //
  initModule = function ( $container ) {
        stateMap.$container = $container;
        setJqueryMap();
        return true;
      };
    //End public method /initModule/

    //return public methods
  return {
    configModule : configModule,
    initModule : initModule
  };
//-------------------END PUBLIC METHODS------------------
}());

