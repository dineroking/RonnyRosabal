/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 5/9/16
 * Time: 10:28 AM
 * Content:
 */

/*
* Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

 In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

 The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

 Check the assertion tests for examples.
 */

var uniteUnique = function() {
  //your code here
  var sorted = [];
  for( var i = 0; i < arguments.length; i++ ){
    for( var j = 0; j < arguments[ i ].length; j++ ){
      if( sorted.indexOf( arguments[i][j] ) === -1 ){
        sorted.push( arguments[i][j] );
      }
    }
  }
  return sorted;
};

console.log( uniteUnique( [3,3, 2, 4, 1 ], [5, 2, 5, 7] ) );