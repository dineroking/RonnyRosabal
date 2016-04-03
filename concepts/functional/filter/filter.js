/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 2/23/16
 * Time: 5:40 PM
 * Content: testing the filter function 
 */

Array.prototype.concatAll = function(){
  var results = [];
  this.forEach( function( subArray ){
    results.push.apply( results, subArray );
  });
  return results;
};

Array.prototype.concatMap =function( action ){
  return this
    .map(function( item ){
      return action( item );
    })
    .concatAll();
};
var jsonFile = 'http://localhost:8888/RonnyRosabal/concepts/functional/filter/filter.json';
var jsonData;
/*var jsonData = $.getJSON( 'filter.json', function( data ){
 console.log( data.responseText );
 }).done( function( data ){
 console.log( data.responseText );
 });*/

/*var getInto = function( response ){
 return response;
 };*/

var makeCall = function( callback ){
  $.getJSON( 'filter.json', function( data ){
    callback( data );
  } );
};

/*$.ajax(
 {
 dataType : 'json',
 url : 'filter.json',
 data : data,
 success : getJason
 }
 );*/

//similar to an ajax call
/*function one(){
 var a;
 setTimeout(function(){
 a = 1;
 }, 2000);
 console.log('inside one():', a );// undefined
 }

 function one1( callback ) {
 window.setTimeout( function(){  //acting like this is an Ajax call
 var a = 1;
 console.log('inside timeout:', a );
 callback(a);
 },2000);
 }

 function two( response ){
 console.log( 'inside two():', response ); // 1
 }

 one1( two );*/

// ~~ FILTER ~~

// DEFINITION

/* Creates a new array with all elements that pass the test implemented by the provided function. */


// GOOD USES


// JAVASCRIPT

// syntax

// array.filter( callback( currVal, index, array ) [, thisArg] );

// examples

var filteringJS = function( data ){

  console.log( 'JAVASCRIPT' );

  var ageRange = { minimum : 25, maximum : 30 };

  var oldEnough = function( person, index ){
    return person.age >= 25;
  };

  var inBetween = function( person, index, arr ){
    return this.minimum <= person.age && person.age <= this.maximum;
  };

  var listOfTags = function( person, index, array ){
    return person.tags.filter( function( tag ){
      return tag === "enim";
    } ).map( function( tag ){
      return person;
    } );
  };

  var listOfFriends = function( person, index, array ){
    return person.friends.filter( function( friend, index, array ){
      return friend.name.charAt( 0 ) === "R";
    } ).map(function( friend ){
      return person;
    });
  };

  console.log( 'data.filter( oldEnough ):', data.filter( oldEnough ) );
  console.log( 'data.filter( inBetween, ageRange ):', data.filter( inBetween, ageRange ) );
  console.log( 'data.map( listOfFriends ).concatAll():', data.map( listOfFriends ).concatAll() );
  console.log( 'data.concatMap( listOfTags ):', data.concatMap( listOfTags ) );
};

makeCall( filteringJS );
// UNDERSCORE

// syntax

// _.filter( collection [, callback] [, context ] )

//examples

var filteringUS = function( data ){

  console.log( '' );
  console.log( 'UNDERSCORE' );

  var ageRange = { minimum : 25, maximum : 30 };

  var oldEnough = function( person, index, array ){
    return person.age >= 25;
  };

  var inBetween = function( person, index, array ){
    return this.minimum <= person.age && person.age <= this.maximum;
  };

  var listOfTags = function( person, index, array ){
    return person.tags.filter( function( tag ){
      return tag === "enim";
    } ).map( function( tag ){
      return person;
    } );
  };

  var listOfFriends = function( person, index, array ){
    return person.friends.filter( function( friend, index, array ){
      return friend.name.charAt( 0 ) === "R";
    } ).map(function( friend ){
      return person;
    });
  };

  console.log( '_.filter( data, oldEnough ):', _.filter( data, oldEnough ) );
  console.log( '_.filter( data, inBetween, ageRange )', _.filter( data, inBetween, ageRange ) );
  console.log( _.map( 'data, listOfFriends).concatAll():', data, listOfFriends).concatAll() );

};

makeCall( filteringUS );
