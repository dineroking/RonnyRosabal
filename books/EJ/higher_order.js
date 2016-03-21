/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/20/16
 * Time: 11:58 AM
 * Content: Tests higher oder functions from chapter 5.
 */

//~~ABSTRACTING ARRAY TRAVERSAL~~

var myArray = [ 1, 2, 3 ];

/* to log for example each element of the array using simple ways a for loop can be used. This, however, is very limiting
 * every time something needs to be done a new for loop has to be created and this is extremely inefficient  */

for( var i = 0; i < myArray.length; i++ ) {
  console.log( myArray[ i ] );
}

/*this is a much more abstract and more flexible function that can be used to manipulate the elements of the array and it does
 * all the heavy lifting with the for loop */
var forEach = function( array, action ){
  console.log( action );
  for( var i = 0; i < array.length; i++ ) {
    action( array[ i ] );
  }
};

var loggit = function loggit( elem ){
  console.log( elem );
};

//the following two calls to the forEach function are doing the same thing with the first one passing a defined function
//and the second one passing an anonymous function
forEach( myArray, loggit );

//this function is being declared as an argument to the forEach function
forEach( myArray, function anonymous( item ){
  console.log( item );
} );

//~~HIGHER ORDER FUNCTIONS~~
console.log( '' );
console.log( '~~HIGHER ORDER FUNCTIONS~~' );

var greaterThan = function( n ){
  return function( m ){
    return m > n;
  }
};

var greaterThan10 = greaterThan( 10 );

console.log( greaterThan10( 11 ) );

/*in this case the function noisy is created and it takes an parameter of a function. this function then takes a parameter
 * that was passed to the inner function. the problem is that if 'f' takes more than one parameter it is only getting the first
 * one. We could pass a lot of parameters to function which end up as arguments to 'f' but we wouldn't know how many parameters
 * 'f' could take. This renders arguments.length for 'f' useless since we are always passing the same number of arguments.*/
var noisy = function noisy( f ){
  return function( arg ){
    console.log( "calling with", arg );
    var val = f( arg );
    console.log( "called with", arg, "- got", val );
    return val;
  };
};

var firstF = noisy( Boolean );
console.log( firstF( 1 ) );
noisy( Boolean )( 0 );

var noisy1 = function noisy( f ){
  return function( arg ){
    console.log( "calling with", arg );
    var val = f.apply( null,  arguments );
    console.log( "called with", arg, "- got", val );
    return val;
  };
};

noisy1( Boolean )( 1, 0, 1, 0);

//~~JSON~~

console.log('');
console.log('~~JSON~~');

var obj = { name : 'Ronny', age : 33 };

var jsn = JSON.stringify( obj );
console.log( jsn );
var back = JSON.parse( jsn );
console.log( back );
console.log( JSON.parse( jsn ).name );

//~~COMPOSABILITY~~

console.log('');
console.log('~~COMPOSABILITY~~');

var ancestry = [
  { name : "Emma  de Milliano",
    sex: "f",
    born: 1876,
    died: 1956,
    father: "Petrus de Milliano",
    mother: "Sophia van Damme"},
  {name: "Carolus Haverbeke", "sex": "m",
    born: 1832, "died": 1905,
    father: "Carel Haverbeke",
    mother: "Maria van Brussel"}];

console.log( ancestry );
/*this function takes an argument of an array and it creates a function 'plus' that takes two arguments of two numbers
* and returns the sum of these two numbers. The average function returns a value that was obtained by using reduce with
* an argument of the function plus devided by the length of the array. In the case of the reduce function it only needs
* to specify the plus function as its argument because plus itself takes two arguments that take the place of the prev and
* curr arguments in the reduce function. */

//this does the same thing as the reduce and plus functions inside of average
/*return array.reduce( function(a, b){
  return a + b;
}) / array.length;*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}


/*this function takes a person argument and it return the age of the person*/
function age(p) { return p.died - p.born; }
//this function takes a person argument and it returns all that are male
function male(p) { return p.sex == "m"; }
//this function takes a person argument and it return all that are female
function female(p) { return p.sex == "f"; }

/*the average function is called and it passes to it the ancestry variable which it is filtered to show all males and
 * to show the age of the males. since there is only one male is this case the average is 73 */
console.log(average(ancestry.filter(male).map(age)));