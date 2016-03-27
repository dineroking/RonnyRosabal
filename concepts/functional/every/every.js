/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/26/16
 * Time: 3:15 PM
 * Content:
 */


// ~~ EVERY ~~

// DEFINITION

/* Tests whether all elements in the array pass the test implemented by the provided function. */


// GOOD USES



// JAVASCRIPT

console.log( 'JAVASCRIPT' );

// syntax

  // array.every( callback( currVal, index, array ) [, thisArg] );

// examples

var allDriversFalse = {
  ronny : {
    name : "Ronny",
    age : 33,
    gender : "male"
  },
  christian : {
    name : "Christian",
    age : 0,
    gender : "male"
  },
  leslie : {
    name : "Leslie",
    age : 29,
    gender : "female"
  }
};

var allDriversTrue = {
  ronny : {
    name : "Ronny",
    age : 33,
    gender : "male"
  },
  christian : {
    name : "Christian",
    age : 25,
    gender : "male"
  },
  leslie : {
    name : "Leslie",
    age : 29,
    gender : "female"
  }
};

var driversFalse = [ 13, 18, 35, 88 ];
var driversTrue = [ 23, 45, 55, 60 ];

var canDrive = function( age ){
  return 18 <= age && age <= 70;
};

var canDrive2 = function( driver ){
  return 18 <= driver.age && driver.age <= 70;
};


var checkNumericRange = function( value ){
  if( typeof value !== 'number'){
    return false;
  }else{
    return this.minimum <= value && value <= this.maximum;
  }
};
var obj = { minimum : 10, maximum : 30 };
var rangeTrue = [ 10, 23, 28 ];
var rangeFalse = [ 15, 33, 29 ];

console.log( 'driversFalse.every( canDrive ):', driversFalse.every( canDrive ) );
console.log( 'driversTrue.every( canDrive ):', driversTrue.every( canDrive ) );

/*the function checkNumericRange gives a lot of flexibility because a different object can be created with a different
* range and it would just have to be added as the second argument of the every method. The second argument of every
* passes that value as the replacement to 'this' if the first argument (callback) has the 'this' keyword to refer to a
* property, in this case minimum and maximum */
console.log( 'rangeFalse.every( checkNumericRange, obj ):', rangeFalse.every( checkNumericRange, obj ) );
console.log( 'rangeTrue.every( checkNumericRange, obj ):', rangeTrue.every( checkNumericRange, obj ) );

//the following case doesnt work because every is only available for arrays and not objects
// console.log( allDriversFalse.every( canDrive2 ) );


// UNDERSCORE

console.log( '' );
console.log( 'UNDERSCORE' );

// syntax

  // _.every( collection [, callback] [, context ] )

//examples

console.log( '_.every( driversFalse, canDrive ):', _.every( driversFalse, canDrive ) );
console.log( '_.every( driversTrue, canDrive ):', _.every( driversTrue, canDrive ) );

//when using _.every from underscore unlike every from javascript, an object can be pass as the collection
console.log( '_.every( allDriversFalse, canDrive2 ):', _.every( allDriversFalse, canDrive2 ) );
console.log( '_.every( allDriversTrue, canDrive2 ):', _.every( allDriversTrue, canDrive2 ) );
console.log( '_.every( rangeFalse, checkNumericRange, obj ):', _.every( rangeFalse, checkNumericRange, obj ) );
console.log( '_.every( rangeTrue, checkNumericRange, obj ):', _.every( rangeTrue, checkNumericRange, obj ) );

