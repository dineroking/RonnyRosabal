/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/21/16
 * Time: 4:44 PM
 * Content:
 */

var obj1 = { num : 2};
var obj2 = { num : 5};

var addSome = function( n, n2, n3 ){
  return this.num + n + n2 + n3;
};

var argNums = [ 3, 5, 5 ];
/*with the call method any function can be attached to an object. essentially what is going on is
* functionName.call( object, functionArguments );*/
console.log( 'addSome.call(obj1, 3, 5, 5 ):', addSome.call(obj1, 3, 5, 5 ) );

/*apply is essentially doing the same thing with the difference that it takes an array as an argument instead of individual
* values. */
console.log( 'addSome.apply( obj, argNums ):', addSome.apply( obj1, argNums ) );

/*using bind basically binds an object to the function and assigns it to a new variable which can later be called with the
* arguments of the original function */
var bound = addSome.bind( obj2 );

console.log( 'bound( 5, 5, 5 ):', bound( 5, 5, 5 ));