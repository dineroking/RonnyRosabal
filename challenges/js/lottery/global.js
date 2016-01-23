/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 1/11/16
 * Time: 11:56 AM
 * Content:
 */

function sortNumbers( ticket ) {
  return ticket.sort( function( a, b ) {

    return a -b;

  } );
}

function compareTickets( numbers ) {
  var ticketsAmount = numbers.length;
  var ticketLength = numbers[ 0 ].length;
  var equalsCounter = 0;
  var result = [];
  if( ticketsAmount > 1 ) {
    for( var i = 0; i < ticketsAmount; i++ ) {

      for( var j = i + 1; j < ticketsAmount; j++ ) {

        for( var k = 0; k < ticketLength; k++ ) {
          if( numbers[ i ][ k ] === numbers[ j ][ k ] ) {
            equalsCounter++;
          }
        }
        if( equalsCounter === 6 ) {
          result.push( i , j );
        }
        equalsCounter = 0;
      }

    }
  }
  return result;
}