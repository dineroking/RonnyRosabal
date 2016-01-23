/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 1/11/16
 * Time: 12:08 PM
 * Content:
 */

var number = document.getElementById( "numbers" );
var input = number.getElementsByTagName( "input" );
var winners = document.getElementById( "winners" );
var winningInput = winners.getElementsByTagName( "input" );
var resultsDiv = document.getElementById( "results" );
var allNumbers = [];
var winningNumbers = [];


function getNumbers() {
  var ticketNumber = [];
  for( var i = 0; i < input.length; i++ ) {
    var inputValue = input[ i ].value;
    if( inputValue < 10 ) {
      inputValue = "0" + inputValue;
    }
    ticketNumber.push( inputValue );
    input [ i ].value = "";
  }
  sortNumbers( ticketNumber );
  allNumbers.push( ticketNumber );
  print();
  resultsDiv.innerHTML += printAll( allNumbers );
}

function getWinners() {
  for( var i = 0; i < winningInput.length; i++ ) {
    var inputValue = winningInput[ i ].value;
    if( inputValue < 10 ) {
      inputValue = "0" + inputValue;
    }
    winningNumbers.push( inputValue );
  }
  sortNumbers( winningNumbers );
  resultsDiv.innerHTML = "";
  resultsDiv.innerHTML = printWinners( allNumbers, winningNumbers );
}

function print() {
  var result = compareTickets( allNumbers );
  var repeat = document.getElementById( "repeat" );
  if( result.length > 0 ) {
    repeat.innerText = "";
    for( var i = 0; i < result.length; i += 2 ) {
      repeat.innerText += "Numbers " + (result[ i ] + 1) + " and " + (result[ i + 1 ] + 1) + " are the same.\n";
    }
  } else {
    repeat.innerText = "Numbers do not repeat.";
  }
}

function printAll( numbers ) {
  var numOfTickets = numbers.length;
  var ticketLength = numbers[ 0 ].length;
  var html = "<ul class = 'numbers'>";

  for( var i = 0; i < numOfTickets; i++ ) {
    if( i % 2 === 0 ) {
      html = "<ul class = 'numbers stripe'>"
    } else {
      html = "<ul class = 'numbers'>"
    }
    html += (i + 1) + ")  ";
    for( var j = 0; j < ticketLength; j++ ) {
      html += "<li>" + numbers[ i ][ j ] + "</li>";
    }

  }
  html += "</ul>";

  return html;
}

function printWinners( allNumbers, winningNumbers ) {
  var numOfTickets = allNumbers.length;
  var ticketLength = allNumbers[ 0 ].length;
  var match;
  var html = "";

  for( var i = 0; i < numOfTickets; i++ ) {
    if( i % 2 === 0 ) {
      html += "<ul class = 'numbers stripe'>"
    } else {
      html += "<ul class = 'numbers'>"
    }
    html += (i + 1) + ")  ";
    for( var j = 0; j < ticketLength; j++ ) {

      for( var k = 0; k < ticketLength; k++ ) {
        if( allNumbers[ i ][ j ] === winningNumbers[ k ] ) {
          match = true;
          break;
        } else {
          match = false;
        }
      }
      if( match ) {
        html += "<li class='highlight'>" + allNumbers[ i ][ j ] + "</li>";
      } else {
        html += "<li>" + allNumbers[ i ][ j ] + "</li>";
      }
    }
    html += "</ul>";
  }

  return html;
}
document.getElementById( "submitNumbers" ).onclick = getNumbers;
document.getElementById( "submitWinners" ).onclick = getWinners;