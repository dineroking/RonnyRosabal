/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 2/8/16
 * Time: 2:58 PM
 * Content: JavaScript to help me understand about Constructors and Prototypes
 */

//CONSTRUCTORS

console.log( "~~CONSTRUCTORS~~" );

/*A constructor a essentially a function that is used with the 'new' keyword to instantiate objects. The syntax is the same
 * as any other function but as convention a leading capital letter is used to differentiate them from regular functions */

//uses a function expression to create the initial constructor
var Person = function( name ){
  this.name = name;
};

//uses a function declaration to create the initial constructor. It may be better to use this syntax when building a
//constructor because when using the constructor property to see the type of an object it shows the name of constructor
function Car( make ){
  this.make = make;
}

//it instantiate a new Person object and passes to it the argument "Name". If there are no parameters to be pass to the
//instance of the object, it can be instantiated as -> var person = new Person;
var person = new Person( "Name" );

//it instantiate a new Car object and passes to it the argument "Toyota"
var car = new Car( "Toyota" );

var date = new Date;//this is a built-in JavaScript property

var objLiteral = {};

console.log( "Person: ", Person );
console.log( "Car: ", Car );
//because all instances of an object copy all the properties of the constructor, person can access the name property
console.log( "person.name: ", person.name );
console.log( "car.make: ", car.make );

//in order to check if an object if of certain type or an instance of a Constructor the operator instanceof can be used

//this returns true because person is an instance of the Person type
console.log( "is person an instance of Person: ", person instanceof Person );
//this returns false because car is NOT an instance of the Person type
console.log( "is car an instance of Car: ", car instanceof Person );

/*in the above cases it is known what the type of person an car were before hand but what if it is not known. In that case
 * it can be found by using the constructor property as follows:*/

//the following logs the actual function of the constructor example: function( name ){this.name = name;}, in the case
//of built-in constructors it logs function Date(){ [native code]}
console.log( "what is the type of person: ", person.constructor );
console.log( "what is the type of car: ", car.constructor );
console.log( "what is the type of date: ", date.constructor );
console.log( "what is the type of Person: ", Person.constructor );//logs the Function constructor
console.log( "what is the type of objLiteral: ", objLiteral.constructor );//objLiteral doesn't have a custom type so it logs Object constructor

function Example( data ){
  this.data = data;
  return this.data;
}

/*in this case the keyword new was ommitted so 'this' inside of the person1 instance now refers to the global scope because without
 * the new keyword Person is a simple function that refers to the global scope and so a name variable is created in the global scope*/
var person1 = Person( 'Andres' );

console.log( 'typeof person1', typeof person1 );
console.log( 'name: ', name );

/*with this function we are able to check if a property is a prototype of an object instead of an own property. It takes
 * two arguments, object, and name and it returns a Boolean if name is in object (a property of object) and name is NOT an
 * own property of object (otherwise is a prototype property)*/
function hasPrototypeProperty( object, name ){
  return name in object && !object.hasOwnProperty( name );
}

var object = {};

//in this case it logs Object because it is checking for object
console.log( 'Object.getPrototypeOf(object): ', Object.getPrototypeOf( object ) );
//because object is an object literal, its prototype is Object.prototype so the following logs true.
console.log( Object.prototype.isPrototypeOf( object ) );

/*when a property of an object is used, the JavaScript engine first looks to see if that property exists as an own property
 * of the object, if it does it return the value but if it doesnt it moves on to look for the property to see if it exists
 * as a prototype property. If it does it returns its value otherwise it returns undefined. Because of this an own property
 * overshadows a prototype property of the same name. As an example if object.toString = function(){} is written, then when
 * object.toString() is called (invoked) only the own property version is used until the own property version is deleted.
 * Only own properties can be deleted.*/

console.log( "" );
console.log( 'Using Prototypes and Constructor.' );
console.log( '' );

//this makes the property (method) sayName available to all instances of Person without giving each one a copy of it
Person.prototype.sayName = function(){
  return this.name;
};

var person2 = new Person( 'Marco' );
console.log( 'person2.name: ', person2.name );

//becareful when assigning values to prototype properties as follows:
Person.prototype.favorites = [];

//favorite property is share by all the instances of Person
person.favorites.push( 'pizza' );
person2.favorites.push( 'chocolate' );

//both of these cases log the same thing, both items in the the favorites array because they share the property
console.log( 'person.favorites: ', person.favorites );
console.log( 'person2.favorites: ', person2.favorites );

//this format is commonly used to declare prototype properties
Person.prototype = {
  doubleName : function(){
    return this.name + this.name;
  }
};

var person4 = new Person( 'Rubio' );

//person4 is still an instance of Person because it was created using the new Person
console.log( 'person4 instanceof Person: ', person4 instanceof Person );
/*in this case, it logs Object because the constructor property exists inside of the prototype property and not the object literal*/
console.log( 'person4.constructor: ', person4.constructor );

/*to avoid this problem simply restore the constructor property to a proper value*/
Person.prototype = {
  constructor : Person,
  toString : function(){
    return 'somthing something';
  }
};

var person5 = new Person( 'Alfredo' );
console.log( 'person5 instanceof Person: ', person5 instanceof Person );
//this logs the Person function (constructor) because it was restored when declaring the prototype property
console.log( 'person5.constructor: ', person5.constructor );

person1 = new Person( 'Ronny' );
person2 = new Person( 'Ted' );

Object.freeze( person2 );
Person.prototype.sayHi = function(){
  return 'Hi ' + this.name;
};
//even though person2 was frozen and no properties can be added or modified, sayHi() was added to the prototype property
//of Person and therefore accessible to both instances
console.log( person1.sayHi() );
console.log( person2.sayHi() );

//in this case we are modifying the prototype property of the Array object (built-in) by adding a new property(method) to
//it. 'this' refers to whatever is on the left side of the dot of the property that calls it so in this case it refers to
//the array to be manipulated, and since the array is an instance of the Array object it has access to other array methods
//like reduce()
Array.prototype.sum = function(){
  return this.reduce( function( results, item ){
    return results + item;
  } )
};

//same logic as above
String.prototype.capitalize = function(){
  return this.slice( 0, 1 ).toUpperCase() + this.slice( 1 );
};

var numbers = [ 10, 10, 10 ];
var string1 = 'this is a string';

console.log( 'numbers.sum(): ', numbers.sum() );
console.log( 'string1.capitalize(): ', string1.capitalize() );