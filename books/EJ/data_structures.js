/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/17/16
 * Time: 10:10 AM
 * Content:
 */

//~~MUTABILITY~~

var object1 = { value : 10 };
var object2 = object1;
var object3 = { value : 10 };

//this returns true because both object1 and object2 are pointing to exactly the same object
console.log( 'object1 == object2:', object1 == object2 );
//this returns false because even though both objects have the same properties and values they are pointing to different
//objects
console.log( 'object1 == object3:', object1 == object3 );

object1.value = 15;

console.log( 'object2.value:', object2.value );
console.log( 'object2.value:', object3.value );

var equals = function( obj1, obj2 ){
  var matched = true;
  for( var prop in obj1 ){
    console.log( obj1[prop], obj2[prop] );
    if( obj1[prop] != obj2[prop] ){
      matched = false;
      break;
    }
  }
  return matched;
};

console.log( 'equals( object1, object3 ):', equals( object1, object3 ) );

/*the purpose of this function is to take an array and convert it into a list of objects where each element goes a level
* deeper. Because rest is assigned list inside the for loop block, the first time around it is assigned the value
* null which is then assigned to list together with the property value. The second time around rest is assigned the list
* which now hold an object with properties value and rest. This continues for subsequent iterations which means that the
* iteration must begin from the last element to the first*/
var arrayToList = function( array ){
  var list = null;
  for( var i = (array.length - 1); i >= 0; i-- ){
    list = { value : array[ i ], rest : list };
  }
  return list;
};

/*this is the opposite to the function above. first it assigns the list argument to node it then checks to see if node is
* true and because node is now an object it is true. it goes into the block and adds the value to the array it then assigns
* the property rest to node and it goes on until the last object where rest has a value of null so when the check is done
* null gives false and so the loop is exited*/

var listToArray = function (list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
};
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20