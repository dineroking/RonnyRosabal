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

  console.log( 'filter:', data.filter( function( person, index, array ){
    return person['_id'] === '570907fb9286910fe4985268';
  } ) );

  console.log( 'filter, map:', data.filter( function( person, index, array ){
    return person['_id'] === '570907fb9286910fe4985268';
  } ).map( function( person, index, array ){
    return { "name" : person['name'], 'id' : person['_id'], 'isActive' : person['isActive'] };
  } ) );

  console.log( 'map > filter _ map:', data.map( function( person, index, array){
    return person.address.split(' ').filter( function( adr, index, array ){
      return !isNaN( adr );
    } ).map( function( adr, index, array ){
      if( adr.length  < 10 ){
        var zeros = '';
        for( var i = 10; i > adr.length; i-- ){
          zeros += 0;
        }
      }
      return zeros + adr;
    } );
  } ) );
};

makeCall( findFirstItems );