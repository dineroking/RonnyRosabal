/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 1/24/16
 * Time: 3:44 PM
 * Content: explains how functions are special objects
 */


// HOISTING

/*Functions in JavaScript can be created in one of two ways, with declaration or expression. With a declaration the keyword
 * function is used followed by the name of the function. With the expression a variable is created and the value or an
 * anonymous function is assigned to it. The difference between the two forms is that when a function is declared it is
 * hoisted to the top of the containing scope.*/
console.log( "~~HOISTING~~" );
var sum = add( 5, 5 );//this works because the function was declared
console.log( "sum: " + sum );
function add( a, b ) {
  return a + b;
}
sum = new Error( "The adding function was not hoisted." );
console.error( "sum: " + sum );
var adding = function( a, b ) {//this function is not hoisted so it must be called after this point
  return a + b;
};


// FUNCTIONS AS VALUES

console.log( "~~FUNCTIONS AS VALUES~~" );

function sayHi() {
  return "Hi from sayHi function.";
}

console.log( "sayHi(): " + sayHi() );

var sayHi2 = sayHi;//sayHi2 now points to the same function as sayHi because functions are objects in JavaScript

console.log( "sayHi2: " + sayHi2 );
console.log( "sayHi2(): " + sayHi2() );

/*because functions are object they can be passed as parameter of other functions/methods as shown by the example of the
 * sort() of the arrays*/

var array = [ 3, 5, 10, 20, 6, 8 ];
array.sort( function( first, second ) {
  return first - second;
} );
console.log( "sorted array: " + array );


// PARAMETERS

console.log( "~~PARAMETERS~~" );

/*when parameters are given passed to a function an array like variable is created called arguments that holds all the
 * the arguments. Because of this any number of parameters can be passed without concern of getting an error since they
 * are being held in an array*/

console.log( "myFunction with no parameters" );
var myFunction = function() {
  return arguments[ 0 ];
};
//in this case since no parameters exist and no arguments are passed through it returns 0
console.log( "myFunction.length: " + myFunction.length );
//it has no parameters or passed arguments so it returns undefined
console.log( "myFunction(): " + myFunction() );
//because arguments are held in an array, even though to named parameters exists, it returns the passed argument "Hi"
console.log( "myFunction('Hi'): " + myFunction( 'Hi' ) );

myFunction = function( value ) {
  return arguments[ 0 ];
};
console.log( "myFunction with 'value' as a parameter" );
//in this case because there is a named parameter, it returns 1
console.log( "myFunction.length: " + myFunction.length );
//even thought there is a named parameter, it still returns undefined because the array holds arguments passed instead of parameters
console.log( "myFunction(): " + myFunction() );
//in this case it returns myArguments
console.log( "myFunction( 'myArgument', 'secondArgument' ): " + myFunction( 'myArgument', 'secondArgument' ) );

/*sometimes not having named parameters can be a good thing if it is not known how many arguments will be passed as shown
 * below*/

var addition = function() {
  var result = 0;
  for( var i = 0; i < arguments.length; i++ ) {
    result += arguments[ i ];
  }
  return result;
};
//because all the arguments are held in an array, all the numbers can be added without having named parameters
console.log( "addition(2, 4, 5): " + addition( 2, 4, 5 ) );

/*function overloading is when function with the same name are created but they have different signatures*/

function anyFunction( string ) {
  return string;
}

function anyFunction() {
  return "Default answer";
}

/*the anyFunction function was overloaded but it will not work because it is not possible to overload a function in
 * JavaScript. In the following example 'Default answer' is return because it was the last one declared*/
console.log( "anyFunction( 'Hi' ): " + anyFunction( "Hi" ) );

// OBJECT METHODS
console.log( "~~OBJECT METHODS~~" );

var person = {
  name : "Ronny",
  sayName : function() {
    return this.name;
  }
};

console.log( "person.sayName(): " + person.sayName() );

/*using the keyword this allows a function to be used by multiple objects if necessary*/
function sayAllNames() {
  return this.name;
}

var Person = function( name ) {
  this.name = name;
  this.sayAllNames = sayAllNames;
};

var person1 = new Person( "Ronny" );
var person2 = new Person( "Leslie" );
var name = "Christian";

//in this case the variable/property name in the person1 instance is being used
console.log( "person1.sayAllNames(): " + person1.sayAllNames() );
//in this case the variable/property name in the person2 instance is being used
console.log( "person2.sayAllNames(): " + person2.sayAllNames() );
//in this case because no objects are being called, "this" refers to the global scope and therefore the global variable
//name is used
console.log( "sayAllNames(): " + sayAllNames() );

var sayNames = function( label ) {
  return label + " : " + this.name;
};

/*call() is a method of the function object and it allows to modify the value of "this". The first parameters of the method
* call() is what the value of "this" should be and the second parameter is the parameter that the function should take.*/
console.log("call(): ");
//in this case it is accessing the global scope because "this" inside the call() method replaces "this" in the body of
//the sayNames() function. the body of the say name function would look like "return label + " : " + this.name". Even thought
//nothing has changed, the original "this" was replaced by the "this" from the call() method
console.log( sayNames.call( this, "global" ) );

//in this case person1 in the call() method replaces "this" in the sayNames() function. The body of the sayNames function
//would look like "return label + " : " + person1.name" and therefore accessing the name property of the object literal person1
console.log( sayNames.call( person1, "person1" ) );

//in this case person2 in the call() method replaces "this" in the sayNames() function. The body of the sayNames function
//would look like "return label + " : " + person2.name" and therefore accessing the name property of the object literal person2
console.log( sayNames.call( person2, "person2" ) );

/*using the apply() method works the same way as the call() method except that the second parameter is an array or array-like
* object*/
console.log("apply(): ");
console.log( sayNames.apply( this, ["global"] ) );
console.log( sayNames.apply( person1, ["person1"] ) );
console.log( sayNames.apply( person2, ["person2"] ) );

/*using the bind() method is somewhat different. The first parameter is still the value for "this", the rest of the parameters
* represent named parameters that become permanent arguments for the newly declared function*/
console.log("bind(): ");

//in this case when using the bind() method only one argument is passed which is the value of "this" in sayNames() function
var sayPerson1Name = sayNames.bind(person1);
//because only one argument is passed into bind and sayNames has it own named parameter when the new function is called
//it doesnt have any permanent argument resulting in returning undefined where it should have returned its permanent argument
console.log(sayPerson1Name());
//this can be solved by passing an argument which at this point is not permanent to the new function
console.log(sayPerson1Name("person1"));
//in this case two arguments are passed using the bind method. the value for "this" and the permanent argument for the
//new function
var sayPerson2Name = sayNames.bind(person2, "person2");
console.log( sayPerson2Name() );

person2.sayNewNames = sayPerson1Name;
person2.sayNewNames("person1");