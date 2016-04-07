/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/5/16
 * Time: 10:53 AM
 * Content:
 */

// http://javascriptissexy.com/understand-javascript-closures-with-ease/

// CLOSURES

// Closures have access to the outer function’s variable even after the outer function returns

var someName = function( firstName ){
  var nameIntro = "Your name is ";
  var someLastName = function( lastName ){
    return nameIntro + firstName + " " + lastName;
  };
  return someLastName;
};

var myName = someName( "Ronny");
console.log( 'myName( "Rosabal" ):', myName( "Rosabal" ) );

// Closures store references to the outer function’s variables; they do not store the actual value

var employeeId = function(){
  var idNumber = 5553322;
  return {
    getId : function (){
    return idNumber;
    },
    setId : function( id ){
      idNumber = id;
    }
  }
};

var myId = employeeId();

console.log( 'myId.getId():', myId.getId() );
myId.setId( 7034597 );
console.log( 'myId.getId():', myId.getId() );

// Closures Gone Awry

/*Because closures have access to the updated values of the outer function’s variables, they can also lead to bugs when the outer function’s variable changes with a for loop*/

var idCreator = function( theCelebrities ){
  var i, id = 100;

  for( i = 0; i < theCelebrities.length; i++ ){
    theCelebrities[ i ][ "id" ] = function(){
      return id + i;
    }
  }

  return theCelebrities;
};

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var actionCelebsIds = idCreator( actionCelebs );

var stalloneId = actionCelebsIds[ 0 ][ "id" ];
var willisId = actionCelebsIds[ 2 ][ "id" ];

console.log( 'stalloneId():', stalloneId() );
console.log( 'willisId():', willisId() );

/*In the preceding example, by the time the anonymous functions are called, the value of i is 3 (the length of the array and then it increments). The number 3 was added to the uniqueID to create 103 for ALL the celebritiesID. So every position in the returned array get id = 103, instead of the intended 100, 101, 102.*/

// SOLUTION

// Immediately Invoked Function Expression (IIFE)

idCreator = function( theCelebrities ){
  var i, id = 100;

  for( i = 0; i < theCelebrities.length; i++ ){
    theCelebrities[ i ][ "id" ] = function( j ){// the j parametric variable is the i passed in on invocation of this IIFE
      return function(){
        return id + j;// each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
      }();// BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function
    }( i );// immediately invoke the function passing the i variable as a parameter​
  }
  return theCelebrities;
};

actionCelebsIds = idCreator( actionCelebs );

stalloneId = actionCelebsIds[ 0 ][ "id" ];
willisId = actionCelebsIds[ 2 ][ "id" ];

console.log( 'stalloneId:', stalloneId );
console.log( 'willisId:', willisId );

var testing = function(){
  console.log( "inside first function" );
  return function(){
    console.log( "inside second function" );
    return "this is the inner return statement";
  }();
}();

console.log( testing );