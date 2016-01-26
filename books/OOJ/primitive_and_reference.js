/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 1/23/16
 * Time: 10:44 AM
 * Content: explains the differences between primitive and reference
 */

/*To set a variable to be garbage collected use the null primitive value.*/

//this creates a new instance of the constructor Object
var object = new Object();
console.log("object: " + object);

//now the object variable is is being assigned null as an assignment therefore good for garbage collection
object = null;
console.log("object: " + object);

/*objects are pointers, an object variable does not hold a valuable but rather the reference to where the object is*/

//object1 points to the Object constructor
var object1 = new Object();
//object2 now points to the same position in memory where the Object constructor exists
var object2 = object1;
console.log("object2: " + object2);
//the original reference is deleted
object1 = null;
//object2 still references the Object constructor
console.log("object2: " + object2);

/*LITERALS*/

//this is an array literal. it instantiate a new array object but without using the new keyword
var array = [];
console.log("array is a type of: " + typeof array);
//this uses the new keyword to create a new array object
var array1 = new Array(1, 2, 3, 4);
//accesses the value of position 1 in array1
console.log("the value of position 1 in array1 is: " + array1[1]);

//in the case of a function, it is a special kind of object so it shows that its type to be a function
var myFunction = function(){
  return "A OK";
};
//this returns "function because myFunction is a special type of object"
console.log("myFunction is a type of: " + typeof myFunction);
//in this case it shows the type to be a "string" because the function is being called and the function itself returns
//a string
console.log("myFunction() is a type of: " + typeof myFunction());

//a regular expression is created by using double forward slashes /pattern/ without the use of quotes
var regEx = /expression/;
console.log("regEx is a type of: " + typeof regEx);

var nothing = null;
console.log("nothing is a type of: " + typeof nothing);
if(nothing === null){
  console.log("nothing is null");
}

//the typeof keyword checks for primitive types of whether is a reference. The return is in lower case because they are
//primitive values. The null primitive value is checked by comparing it to null.

//OBJECT PROPERTY ACCESS

//as an example i'll use the push method of the Array object

//in this case the dot notation adds a number into the array
array.push(1);
console.log("array[0]: " + array[0]);
//in this case the bracket notation is being used
array["push"](3);
console.log("array[1]: " + array[1]);

//the bracket notation is more flexible. properties and methods can be accessed dynamically which opens doors
//a variable can hold the name of the method that can be changed
var add = "push";
array[add](5);
console.log("array[2]: " + array[2]);

//INSTANCE OF

//using instanceof is a good way to find if a variable holds a value or a reference to an object

//in this case myFunction is checked to see if it an instance of the Function object, it returns false because
//the function is called () and the function returns a string
console.log(myFunction() instanceof Function);
//in this case it returns true
console.log(myFunction instanceof Function);
//in this case it returns true because it is an instance of Object, which goes to show that instance of works with
//inherited objects
console.log(myFunction instanceof Object);
//this test whether array is an instance of Array
console.log(array instanceof Array);

/*each web page has its own copy of Object, Array and all the other Built-in types. because of this instanceof will not
* work across different frames. to get around this Array.isArray( variable ) can be used*/
//tests if a array is an instance of Array
console.log(Array.isArray(array));

//PRIMITIVE WRAPPER

//this is automatically done by JavaScript by wrapping the primitive value in an object. This is automatically done for
//String, Number and Boolean
var name = "this is a name";
var last = "this is a last name";
var firstChar = name.charAt(0);
console.log("firstChar: " + firstChar);
//this is what is happening behind the scenes
name = "another name";
var temp = new String(name);
firstChar = temp.charAt(0);
temp = null;
console.log("firstChar: " + firstChar);
//because the String object is destroyed inmediately after it is created therefore name is not an instance of String
console.log(name instanceof String);
console.log(last instanceof String);
console.log(typeof name);
console.log(typeof last);
//in this case the object is not inmediately destroyed and therefore it is still an instance of Object
var nameObject = new String("new name");
console.log(typeof nameObject);

//in JavaScript an onject is always considered true in a conditional statement, so in both of the following if statements
//the body is executed. For this reason using a primitive wrapper should be avoided.
var flag = new Boolean(false);
if(flag){
  console.log("I'm inside the flag if statement");
}
var obj = {};
if(obj){
  console.log("I'm inside the obj if statement");
}
