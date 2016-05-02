/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/15/16
 * Time: 5:32 PM
 * Content:
 */

/*Can you realize a function that returns word count from a given string?

 You have to ensure that spaces in string is a whitespace for real.

 What we want and finish of work:

 countWords("Hello"); // returns 1 as int
 countWords("Hello, World!") // returns 2
 countWords("No results for search term `s`") // returns 6
 countWords(" Hello") // returns 1
 // ... and so on

 What kind of tests we got for your code:

 Function have to count words, but not spaces, so be sure that it does right.
 Empty string has no words.
 String with spaces around should be trimmed.
 Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
 Be sure that words with chars like -, ', ` are counted right.*/

var countWords = function( stringToBeCounted ){
  var splitArray = [];
  if( stringToBeCounted.length > 0){
    splitArray = stringToBeCounted.trim().split(/\s+/);
  }
  return splitArray.length;
};

console.log( countWords( "Ronny" ) );
console.log( countWords( "Dear   Victoria, I love  to press   space button." ) );

// OTHERS SOLUTIONS

/*
function countWords(str) {
 return str.split(/\s/).filter(el => {
 return el;
 }).length;
}
*/

function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}

function countWords(str) {
  return str.trim().length === 0 ? 0 : str.replace(/\s(?:\s+)?|\s+/g, ' ').trim().split(' ').length;
}

function countWords(str) {
  str = str.trim();
  if (str === '') return 0;
  return str.split(/\s+/).length;
}