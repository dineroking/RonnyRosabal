/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/26/16
 * Time: 1:29 PM
 * Content:
 */

/*
* What we want to implement is a filter function, like Array.filter(), also similar to the _.filter() in underscore.js and lodash.js.

 The usage is quite simple, like:

 [1,2,3,4].filter((num)=>{ return num > 3})
 should output [4]
 */

// MY SOLUTION

Array.prototype.filter = function( test ){
  return this.reduce( function( filtered, curr, index, array ){
    if( test( curr ) ){
      filtered.push( curr );
    }
    return filtered;
  }, [] );
};

// OTHERS SOLUTIONS

Array.prototype.filter = function(fn){
  var res = [];
  for (var i = 0; i<this.length; i++){
    if (fn(this[i])){
      res.push(this[i]);
    }
  }
  return res;
};



Array.prototype.filter = function (cb, thisArg) {
  var ret = [];
  for (var i = 0, len = this.length; i < len; i += 1)
    cb.apply(thisArg, [this[i], i, this]) && ret.push(this[i]);
  return ret;
};