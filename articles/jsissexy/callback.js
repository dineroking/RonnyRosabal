/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/3/16
 * Time: 4:40 PM
 * Content:
 */

var allTheStuff = [];
var person = {
  name : "Ronny",
  age : 33
};

var logStuff = function( input ){
  if( typeof input === "string" ) {
    console.log( input );
  } else if( typeof input === "object" ) {
    for( var prop in input ) {
      console.log( prop + ":" + input[ prop ] );
    }
  }
};

var inputStuff = function( data, callback ){
  allTheStuff.push( data );
  callback( data );
};

inputStuff( person, logStuff );

/* it is very good practice to make the callback optional */

inputStuff = function( data, callback ){
  allTheStuff.push( data );

  if( typeof callback === "function" ) {
    callback( data );
  }
};

// Problem When Using Methods With The this Object as Callbacks

var clientData = {
  id : 34597,
  fullName : "Not Set",
  setUserName : function( lastName, firstName ){
    this.fullName = firstName + " " + lastName;
  }
};

var getUserName = function( lastName, firstName, callback ){
  if( typeof callback === "function" ) {
    callback( lastName, firstName );
  }
};

getUserName( "Rosabal", "Ronny", clientData.setUserName );

//this returns Not Set, because 'this' inside of the setUserName is being called inside of the getUserName function and so
//'this' will refer (be attached) to the global environment

console.log( 'clientData.fullName:', clientData.fullName );
console.log( 'window.fullName:', window.fullName );

getUserName( "Rosabal", "Ronny", clientData.setUserName.bind( clientData ) );

console.log( 'clientData.fullName:', clientData.fullName );

// Use the Call or Apply Function To Preserve this

/* the following code fixes the previous code by taking an extra parameter that is the object that the callback should
 * reference to when using the call method of the function object.*/
getUserName = function( lastName, firstName, callback, callbackObj ){
  if( typeof callback === "function" ) {
    callback.call( callbackObj, lastName, firstName );
  }
};

getUserName( "Gonzalez", "Miriam", clientData.setUserName, clientData );
console.log( 'clientData.fullName:', clientData.fullName );

// own example of the above problem

var numbers = {
  numbersArray : [ 10, 20, 30, 40 ],
  sum : 0,
  avg : 0,
  calcSum : function( arrayOfNumbers ){
    this.sum = arrayOfNumbers.reduce( function( sum, curr ){
      return sum + curr;
    }, 0 );
  },
  calcAvg : function(){
    if( this.sum === 0 ){
      this.calcSum( this.numbersArray );
    }
    this.avg = this.sum / this.numbersArray.length;
  }
};

numbers.calcSum( numbers.numbersArray );
console.log( 'numbers.sum:', numbers.sum );
numbers.calcAvg();
console.log( 'numbers.avg:' ,numbers.avg );

var changingTheSum = function( callback, callbackObj, newNumbers ){
  if( typeof callback === "function" ){
    callback.apply( callbackObj, [newNumbers] );//because apply's second argument is an array it must be stated as an array building the callback function
  }
};

var newSetNumbers = [ 100, 200, 300, 400 ];
changingTheSum( numbers.calcSum, numbers, newSetNumbers );
console.log( 'numbers.sum:', numbers.sum );
numbers.calcAvg();
console.log( 'numbers.avg:', numbers.avg );


// Multiple Callback Functions Allowed
