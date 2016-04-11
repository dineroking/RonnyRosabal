/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/9/16
 * Time: 8:50 AM
 * Content:
 */


// MAKE THE AJAX CALL

var makeCall = function( callback ){
  $.getJSON( 'mixtures.json', function( data ){
    callback( data );
  });
};

var checkConnection = function( data ){
  console.log( data );
};

makeCall( checkConnection ); // connection is good

var findFirstItems = function( data ){

  var findPersonWithID = function( ){};
};

makeCall( findFirstItems );