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

  var findPersonWithID = function( person, index, array, id ){
    if( person[ '_id' ] === id ){
      return person;
    }
  };

  console.log( 'reduce:', data.reduce( function( prev, curr, index, array ){
    return curr['_id'] === '570907fb9286910fe4985268' ? prev.concat( curr ) : prev;
  }, [] ) );

  console.log( 'map:', data.map( function( person, index, array, id ){
    if( person[ '_id' ] === '570907fb9286910fe4985268' ){
      return person;
    }
  } ) );

  console.log( data.filter( function( person, index, array ){
    return person['_id'] === '570907fb9286910fe4985268';
  } ) )
};

makeCall( findFirstItems );