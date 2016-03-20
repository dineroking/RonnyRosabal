/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/13/16
 * Time: 3:33 PM
 * Content:
 */

var someString = 'string variable outside block';
//'someString' inside the block modifies the 'someString' variable outside the block, this is because only functions
//hold local variables inside their block
{
  var someString = 'string variable inside first block';
}

console.log( 'someString:', someString );

//let is for future versions of JavaScript which would set 'someString' as a local variable inside of the block
{
  //let someString = 'string variable inside second block';
}

// --> CLOSURE <--

//Question: What happens to a local variable when the function that called it is no longer active?

//local variables are re-created with every instance of the function, the variable is alive in multiple instances
//a function that closes around a local variable is called a closure. In this case wrapValue is a closure for the
//local variable 'localVariable'
var wrapValue = function( n ){
  var localVariable = n;
  return function(){
    return localVariable;
  };
};

//the ability to reference the instance of a local variable in an enclosing function is called closure

//in this case both wrap instances are functions that have access to the local variable 'localVariable'
var wrap1 = wrapValue( 5 );
var wrap2 = wrapValue( 10 );

console.log( 'wrap1: ', wrap1, 'wrap1():', wrap1() );
console.log( 'wrap2: ', wrap2, 'wrap2():', wrap2() );

var wrapValue2 = function( n ){
  var localVariable = n;
  return localVariable;
};

var wrap3 = wrapValue2( 3 );
var wrap4 = wrapValue2( 7 );

console.log( 'wrap3: ', wrap3 /* 'wrap3():', wrap3()*/ );
console.log( 'wrap4: ', wrap4 /*'wrap4():', wrap4()*/ );

var multiplier = function( number ){
  return function( factor ){
    return factor * number;
  }
};

//byFive instance is a function that has access to the local variable 'number'. in this instance 'number' was given the value
//10. When the byFive function is called it accesses the number variable ( 10 ) and multiplies it by its own local variable
//factor which now holds the value of 5
var byFive = multiplier( 10 );
console.log( 'byFive( 5 ):', byFive( 5 ) );

//same as above. byTen is now an instance function that has access to the local variable number and it multiplies it with
//its local variable factor
var byTen = multiplier( 10 );
console.log( 'byTen( 10 ):', byTen( 10 ) );

//-->RECURSION<--

//this function takes two parameters, a base and exponent. If the exponent is 0 it return 1, otherwise it multiplies the base
//by its own function. The idea is that exponent serves the purpose of a counter and base is being multiplied to itself until
//exp is 0 in which case base is multiplied by 1 and the results is returned.

//remember that when a function is called (invoked) JavaScript jumps into the body of that function and works on that before
//continuing
var power = function power( base, exp ){
  if( exp === 0 )
    return 1;
  else
    return base * power( base, exp - 1 );
};


var power0 = function( base, exp ){
  var result = 1;
  for( ; exp > 0; exp-- ){
    result *= base;
  }
  return result;
};

//calling power( 2, 3 ) or power1( 2 ) gives the same result, that is because when power1 is called it gets to the return
//value which in turn calls functions two() twice. These functions are executed first before base is multiplied and returned
//in the original function
var power1 = function( base ){
  return base * two( base ) * two( base );
};

//this is essentially what is happening with recursion
var power2 = function( base ){
  return base * (function(){
      return base * (function(){
          return base;
        }())
    }())
};

function two( num ){
  return num;
}

console.log( 'power( 2, 3, ):',power( 2,  3 ) );
console.log( 'power0( 2, 3 ):', power0( 2, 3 ) );
console.log( 'power1( 2 ):', power1( 2 ) );
console.log( 'power3( 2 ):', power2( 2 ) );

/*this function (findSolution) takes a number say 13 (target) and it returns a function (find) which holds two arguments
 * the starting number and the history. the find function first compares the start number to the target if it matches it
  * returns the history and game over, otherwise it checks to see if start is greater than target if so that means no solution
  * exists so it returns null and game over, otherwise it calls itself (find) with the start value set to start + 5 (6) and
  * it goes through the same process all over again if start is still smaller than target than it calls itself again with the
  * value of start set to start + 5 (11). Lets say this time when it does its checks start is too big then it return null
  * which means that the alternate find function is called using start * 3, this will also be too big which also return null
  * which causes the higher find call to return null and its alternate find call is ran and so on until a solution is found
  * or no solution is found*/
function findSolution( target ){
  function find( start, history ){
    if( start == target ){
      return history;
    }else if( start > target ){
      return null;
    }else{
      return find( start + 5 , "(" + history + " + 5)" ) || find( start * 3, "(" + history + " * 3)" );
    }
  }
  return find( 1, '1');
}

console.log( findSolution( 48 ) );