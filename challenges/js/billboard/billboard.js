/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/25/16
 * Time: 1:54 PM
 * Content:
 */

/*
You can print your name on a billboard ad. Find out how much it will cost you. Each letter is £30.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
*/


// MY SOLUTION

function billboard(name, price = 30){
  var nameArray = name.split("");
  return nameArray.reduce( function( totalPrice , curr, index, array ){
    return totalPrice + price;
  }, 0 );
}

console.log( billboard("Jeong-Ho Aristotelis") );



// OTHERS SOLUTION

function billboard(name, price = 30) {
  // Solving Recursively
  if (name.length === 0) return 0;
  return price + billboard(name.split("").filter((e,i)=>i!=0).join(""), price);
}

function billboard(n, p = 30){
  return n.length / (1/p) ;
} 