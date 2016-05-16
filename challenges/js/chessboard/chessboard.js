/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 5/16/16
 * Time: 12:24 PM
 * Content:
 */

/*
* A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

 Making a digital chessboard I think is an interesting way of visualising how loops can work together.

 Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

 So chessBoard(6,4) should return an array like this:

 [
 ["O","X","O","X"],
 ["X","O","X","O"],
 ["O","X","O","X"],
 ["X","O","X","O"],
 ["O","X","O","X"],
 ["X","O","X","O"]
 ]
 */


// MY SOLUTION

function chessBoard(rows, columns) {
// your code goes here
  var black = "X", white = "O", result = [], isWhite = true, temp;
  for( var i = 0; i < rows; i++ ){
    temp = [];
    if( i % 2 === 0){
      isWhite = false;
    }
    else {
      isWhite = true;
    }
    for( var j = 0; j < columns; j++ ){
      if(isWhite){
        temp.push( black );
        isWhite = false;
      }
      else {
        temp.push( white );
        isWhite = true;
      }
    }
    result.push( temp );
  }
  return result;
}

console.log( chessBoard( 3, 10 ) );


// OTHERS SOLUTION

/*
 function chessBoard(rows, columns) {
 return Array.from({length: rows}, (_,i) => Array.from({length: columns}, (_,j) => 'OX'[(i+j)%2]));
 }
*/

/*
 function chessBoard(rows, columns) {
 var board = [];
 var ch = 'X';

 for (var i = 0; i < rows; i++) {
 board[i] = [];

 for (var j = 0; j < columns; j++) {
 ch = ch == 'X' ? 'O' : 'X';
 board[i][j] = ch;

 }

 ch = board[i][0];
 }

 return board;
 }
 */