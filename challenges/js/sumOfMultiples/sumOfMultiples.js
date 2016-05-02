/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 5/2/16
 * Time: 1:06 PM
 * Content:
 */


/*Your Job:

 Find the sum of the multiples of n i.e. less than m

 Keep in Mind:

 n and m are natural number
 note that the second argument m is excluded from the multiples
 Remember these:

 */

// MY SOLUTION
function sumMul( n, m ){
//your idea here
  var result = 0;
  if( n >= m ){
    result = "INVALID";
  }else {
    for( var i = n; i < m; i += n ){
      if( i % n === 0 ){
        result += i;
      }
    }
  }
  return result;
}