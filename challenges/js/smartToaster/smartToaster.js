/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 5/16/16
 * Time: 1:48 PM
 * Content:
 */

/*
Description:

 I keep burning my toast!

 Please can you create some basic JavaScript code to stop this happening. I want to input the type of bread and in return I want to know how long to toast the bread for.

 "white bread" ---> "1 min"
 "frozen white bread" ---> "1.5 mins"
 "brown bread" ---> "2 mins"
 "frozen brown bread" ---> "3 mins"

 Anything else that you put in the toaster should return "Please do not put that in the toaster!"

 Your toaster has to be case insensitive.

 This all seems easy enough! The only problem is that our toaster is unbelievably basic. You have to complete this function in just 250 characters!

 If you use ES6 features like Let and Const declaration, the code will get longer due to the transformation by babel.
 */

// MY SOLUTION  === 439 characters

function toaster( breadType ){
  var t;
  switch( breadType.toLowerCase() ) {
    case "white bread" :
      t = "1 min";
      break;
    case "frozen white bread" :
      t = "1.5 mins";
      break;
    case "brown bread" :
      t = "2 mins";
      break;
    case "frozen brown bread" :
      t = "3 mins";
      break;
    default :
      t = "Please do not put that in the toaster!";
  }
  return t;
}


// OTHERS SOLUTIONS


// this solution is 58 characters long
function toaster(breadType){
  return f(breadType)
}

function f(b) {
  switch(b.toLowerCase()){
    case "white bread": return "1 min"
    case "frozen white bread": return "1.5 mins"
    case "brown bread": return "2 mins"
    case "frozen brown bread": return "3 mins"
  }
  return "Please do not put that in the toaster!"
}

/*this example is 350 characters without the code on line 83 and 0 with line 81*/
function toaster(breadType){
  switch(breadType.toLowerCase()){
    case "white bread": return "1 min"
    case "frozen white bread": return "1.5 mins"
    case "brown bread": return "2 mins"
    case "frozen brown bread": return "3 mins"
  }
  return "Please do not put that in the toaster!"
}

// toaster.toString = _ => ""


// this solution is 131 characters long
var time={
  "white bread":"1 min",
  "frozen white bread":"1.5 mins",
  "brown bread": "2 mins",
  "frozen brown bread": "3 mins"
}
function toaster(t){ //t为breadType
  t=t.toLowerCase();
  return time[t] ||  "Please do not put that in the toaster!";
}