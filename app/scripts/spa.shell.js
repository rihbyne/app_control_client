/*
* spa.shell.js
* Root namespace module
*/
/*jslint
        browser : true, continue : true,
        devel : true, indent : 2, maxerr : 50,
        newcap : true, nomen : true, plusplus : true,
        regexp : true, sloppy : true, vars : false,
        white : true
*/
/*global $, spa.shell */

spa.shell = (function () {

//------------BEGIN MODULE SCOPE VARIABLES---------
  var
    configMap = {
    mainHtml: String() + viewStore.getTrimmedString(),
    msgLogExtendTime : 1000,
    msgLogRetractedTime : 300,
    msgLogExtendHeight : 450,
    msgLogRetractedHeight : 15,
    msgLogExtendedTitle : 'click to retract',
    msgLogRetractedTitle : 'click to expand'
  },

    stateMap = {
    $container : null,
    isChatRetracted : true
  },
    jqueryMap = {},

    setJqueryMap, toggleMsgLog, onClickMsgLog, initModule;

//-----------END MODULE SCOPE VARIABLES------------

//-----------BEGIN UTILITY METHODS-----------------
// example: getTrimmedString
//-----------END UTILITY METHODS-------------------

//-----------BEGIN DOM METHODS---------------------
// BEGIN DOM  method  /setJqueryMap/
  setJqueryMap = function () {
        var $container = stateMap.$container;

        jqueryMap = {
          $container : $container,
          $msglog : $container.find('.spa-shell-foot-msglog')
        };
      };
// END DOM METHOD /setJqueryMap/

// BEGIN DOM MWTHOD /toggleMsgLog/
// Purpose : Extends or retracts chat slider
// State : sets stateMap.isChatRetracted
      // * true - slider is retracted
      // * false - slider is expanded
// Arguments :
// * doExtend - if true,extend the slider, else retract the slider
// * callback - optional function to execute at end of animation
// Settings:
      // msglogextendheight, msglogextendtime
      // msglogretractedheight, msglogretractedtime
      // Returns :boolean
      //  * true - slider animation activated
      //  * false - slider animation deactivated
      //
  toggleMsgLog = function (doExtend, callback) {
          var
          pxMsgLogHt = jqueryMap.$msglog.height(),
          isOpen = pxMsgLogHt === configMap.msgLogExtendHeight,
          isClosed = pxMsgLogHt === configMap.msgLogRetractedHeight,
          isSliding = !isOpen && !isClosed;

          // avoid race condition
          if (isSliding) {
            return false;
          }

          // Begin extend msglog slider
          if (doExtend) {
            jqueryMap.$msglog.animate(
                  { height : configMap.msgLogExtendHeight },
                  configMap.msgLogExtendTime,
                  function () {
                      jqueryMap.$msglog.attr(
                        'title', configMap.$msgLogExtendedTitle
                      );
                      stateMap.isChatRetracted = false;
                      if (callback) {
                        callback( jqueryMap.$msglog );
                      }
                    }
              );
            return true;
          }
          // End extend msglog slider

          // Begin retract msglog slider
          jqueryMap.$msglog.animate(
              { height : configMap.msgLogRetractedHeight},
              configMap.msgLogRetractedTime,
              function () {
                  jqueryMap.$msglog.attr(
                    'title',configMap.$msgLogRetractedTitle
                  );
                  stateMap.isChatRetracted = true;
                  if (callback) {
                    callback( jqueryMap.$msglog );
                  }
                }
          );
          return true;
          // End retract msglog slider
        };
      // End DOM  method /toggleMsglog/
//-----------END DOM METHODS-----------------------

//-----------BEGIN EVENT HANDLERS-----------------
// example: onClickButton = ...
  onClickMsgLog = function (event) {
            toggleMsgLog( stateMap.isChatRetracted );
            return false;
          };
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

    // Begin public method /initModule/
    // Purpose  :Initialize a module
    // Arguments    :
    //  * $container the jquery element used by  this feature
    // Returns  : true
    // Throws   : nonaccidental
    //
  initModule = function ( $container ) {
      // load html and map jQuery  collections
        stateMap.$container = $container;
        $container.html( configMap.mainHtml );
        setJqueryMap();

        stateMap.isChatRetracted = true;
        jqueryMap.$msglog
            .attr( 'title',configMap.msgLogRetractedTitle )
            .click( onClickMsgLog );
      };
    //End public method /initModule/

    //return public methods
  return {
    initModule : initModule
  };
//-------------------END PUBLIC METHODS------------------
}());

