/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/6/16
 * Time: 11:37 PM
 * Content:
 */

/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/6/16
 * Time: 10:01 PM
 * Content:
 */

// BIND()


var user = {
  data : [
    { name : "Ronny", age : 33 },
    { name : "Christian", age : 0 }
  ],
  clickHandler : function( event ){
    console.log( "clickHandler was invoked", event );
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
    $( 'input' ).val( this.data[ randomNum ].name + " " + this.data[ randomNum ].age );
  }
};

//the following code produces an error because 'this' inside of the clickHandler method is being bounded to the button object
//and the button object does not have a user property so the error says that it cannot read property 1 or 0 of undefined
//$('button').click( user.clickHandler );

//libraries like jQuery and Backbone.js provide the binding already so the only thing needed is the bind() method
// $( 'button' ).click( user.clickHandler.bind( user ) );

var clicker = user.clickHandler.bind( user );
$( 'button' ).click( clicker );

// my example

var myObj = {
  company : "ExpressJet",
  position : "Pilot",
  saySomething : function( name ){
    return name + " works at " + this.company + " as a " + this.position + ".";
  }
};

var anotherObj = {
  company : "Google",
  position : "El Jefe"
};

anotherObj.saySomething = myObj.saySomething.bind( anotherObj );

console.log( myObj.saySomething( "Ronny" ) );
console.log( anotherObj.saySomething( "Christian" ) );

// end of my example


var data = [
  { name : "Samantha", age : 12 },
  { name : "Alexis", age : 14 }
];

user = {
  // local data variable​
  data : [
    { name : "T. Woods", age : 37 },
    { name : "P. Mickelson", age : 43 }
  ],
  showData : function( event ){
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1​
    return this.data[ randomNum ].name + " " + this.data[ randomNum ].age;
  }
};

var showDataVar = user.showData;

// it prints out from the global data variable because the showData method is assigned to the global variable showDataVar
// which belongs to the global environment and so when it is called it tries to access the global variable data
console.log( 'showDataVar():', showDataVar() );
console.log( 'window.showDataVar():', window.showDataVar() );//prints the same thing as above

// to fix it we need to bind the assignment of the method to the object user

showDataVar = user.showData.bind( user );

console.log( 'showDataVar():', showDataVar() );
console.log( 'window.showDataVar():', window.showDataVar() );

// BORROWING METHODS WITH BIND()

var cars = {
  data : [
    { name : "Honda Accord", age : 14 },
    { name : "Tesla Model S", age : 2 }
  ]
};

//in the following code you want to bind the showData method from the user obj to the cars object and so cars is passed as
// the parameter to the bind method

cars.showData = user.showData.bind( cars );

console.log( 'cars.showData():', cars.showData() );

/*One problem with this example is that we are adding a new method (showData) on the cars object and we might not want to do that just to borrow a method because the cars object might already have a property or method name showData. We don’t want to overwrite it accidentally. As we will see in our discussion of Apply and Call below, it is best to borrow a method using either the Apply or Call method.*/



// CURRY A FUNCTION

/*Function Currying, also known as partial function application, is the use of a function (that accept one or more arguments) that returns a new function with some of the arguments already set. The function that is returned has access to the stored arguments and variables of the outer function. */

function greet( gender, age, name ){

  var salutation = gender === 'male' ? "Mr. " : "Ms. ";

  return age > 25 ? "Hello, " + salutation + name + "." : "Hey, " + name + ".";
}

var greetAdultMale = greet.bind( null, 'male', 33 );
var greetYoungster = greet.bind( null, '', 16 );

console.log( 'greetAdultMale( "Ronny" ):', greetAdultMale( "Ronny" ) );
console.log( 'greetYoungster( "Christian" ):', greetYoungster( "Christian" ) );


// APPLY() AND CALL()

var avgScore = "global avgScore";

var avg = function( arrayOfScores ){

  var sumOfScores = arrayOfScores.reduce( function( totalScore, currScore, index, array ){
    return totalScore + currScore;
  } );

  // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply
  this.avgScore = sumOfScores / arrayOfScores.length;
};

console.log( 'avgScore:', avgScore );// -> global avgScore
// avg( [1,2,3] );
// console.log( 'avgScore:', avgScore ); // -> 2

var gameController = {
  scores : [ 20, 34, 55, 46, 77 ],
  avgScore : null
};

//sets the global variable avgScore
avg( gameController.scores );
console.log( 'avgScore:', avgScore );// -> 46.4
console.log( 'gameController.avgScore:', gameController.avgScore );// -> null

// reset avgScore variable

avgScore = "global avgScore";

// To set the "this" value explicitly, so that "this" is bound to the gameController,​
// We use the call () method:​

avg.call( gameController, gameController.scores );

console.log( 'window.avgScore:', window.avgScore ); // -> global avgScore
console.log( 'gameController.avgScore:', gameController.avgScore )// -> 46.4

var clientData = {
  id : 094545,
  fullName : "Not Set",
  // setUserName is a method on the clientData object​
  setUserName : function( firstName, lastName ){
    // this refers to the fullName property in this object​
    this.fullName = firstName + " " + lastName;
  }
};

function getUserInput( firstName, lastName, callback, callbackObj ){
  // The use of the Apply method below will set the "this" value to callbackObj​
  callback.apply( callbackObj, [ firstName, lastName ] );
}

getUserInput( "Barack", "Obama", clientData.setUserName, clientData );
console.log( 'clientData.fullName:', clientData.fullName );


// Borrowing Functions with Apply and Call (A Must Know)


// An array-like object: note the non-negative integers used as keys​
var anArrayLikeObj = {
  0 : "Martin",
  1 : 78,
  2 : 67,
  3 : [ "Letta", "Marieta", "Pauline" ],
  length : 4
};

// Make a quick copy and save the results in a real array:​
// First parameter sets the "this" value​

var newArray = Array.prototype.slice.call( anArrayLikeObj, 0 );

console.log( 'newArray:', newArray ); // ["Martin", 78, 67, Array[3]]​


/// Search for "Martin" in the array-like object​
var findMatch = Array.prototype.indexOf.call( anArrayLikeObj, "Martin" ) !== -1;
console.log( 'findMatch:', findMatch );

var reversed = Array.prototype.reverse.call( anArrayLikeObj );
console.log( 'reversed:', reversed );

var popped = Array.prototype.pop.call( anArrayLikeObj );
console.log( 'popped:', popped );
console.log( 'anArrayLikeObj:', anArrayLikeObj );

var pushed = Array.prototype.push.call( anArrayLikeObj, "Miriam" );
console.log( 'pushed:', pushed );
console.log( 'anArrayLikeObj:', anArrayLikeObj );


/*The arguments object that is a property of all JavaScript functions is an array-like object, and for this reason, one of the most popular uses of the call () and apply () methods is to extract the parameters passed into a function from the arguments object.*/

var argumentsObj = function( names ){

  // Because the arguments object is an array-like object​
  // We can use the slice () Array method on it​
  // The number "1" parameter means: return a copy of the array from index 1 to the end. Or simply: skip the first item​

  var args = Array.prototype.slice.call( arguments, 1 );
  var allArgs = Array.prototype.slice.call( arguments );

  // I added this bit so we can see the args value​
  console.log( 'args', args );
  console.log( 'allArgs', allArgs );
};

argumentsObj( "Ronny", "Alain", "Rosabal", "Gonzalez" );


gameController = {
  scores : [ 20, 34, 55, 46, 77 ],
  avgScore : null,
  players : [
    { name : "Tommy", playerID : 987, age : 23 },
    { name : "Pau", playerID : 87, age : 33 }
  ]
};

appController = {
  scores : [ 100, 120, 135, 154, 166 ],
  avgScore : null,
  avg : function(){
    var sumOfScores = this.scores.reduce( function( sum, curr, index, array ){
      return sum + curr;
    } );

    this.avgScore = sumOfScores / this.scores.length;
  }
};

console.log( 'gameController.avgScore:', gameController.avgScore );
console.log( 'appController.avgScore', appController.avgScore );
appController.avg();
console.log( 'gameController.avgScore:', gameController.avgScore );
console.log( 'appController.avgScore', appController.avgScore );
appController.avg.apply( gameController );
console.log( 'gameController.avgScore:', gameController.avgScore );
console.log( 'appController.avgScore', appController.avgScore );

appController.maxNum = function(){
  this.avgScore = Math.max.apply( null, this.scores );
};

appController.maxNum.apply( gameController, gameController.scores );
console.log( 'gameController.avgScore:', gameController.avgScore ); // 77​

// NEAT FEATURE OF APPLY()

var numArray = [ 2, 3, 4, 5 ];

console.log( 'Math.max( 2,3,4 ):', Math.max( 2,3,4 ) );
console.log( 'Math.max( numArray ):', Math.max( numArray ) );// cannot used array in this manner so it returns NaN

console.log( 'Math.max.apply( null, numArray ):', Math.max.apply( null, numArray ) );


