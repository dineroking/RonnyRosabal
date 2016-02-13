/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 1/25/16
 * Time: 8:07 PM
 * Content: javascript to help understand how objects work
 */

// DETECTING PROPERTIES

console.log( "detecting properties with dot notation: " );

/*it could make a lot of sense to try to detect if a property exist inside an object by using an if statement but this
 * could be misleading because if statement respond to truthy and falsy value*/

var myObj = {
  flag : false,
  zero : 0,
  negative : -1,
  otherObj : otherObj = {}
};

//in this case it says that flag doesn't exist because the value of flag is false
if( myObj.flag ) {
  console.log( "The flag property exists." );
} else {
  console.log( "The flag property does not exist" );
}

//in this case it says that zero doesn't exist because the value of zero is 0
if( myObj.zero ) {
  console.log( "The zero property exists." );
} else {
  console.log( "The zero property does not exist" );
}

if( myObj.negative ) {
  console.log( "The negative property exists." );
} else {
  console.log( "The negative property does not exist" );
}

if( myObj.otherObj ) {
  console.log( "The otherObj property exists." );
} else {
  console.log( "The otherObj property does not exist" );
}

console.log( "" );
console.log( "detecting properties with the in operator: " );

/*when using the in operator it check whether a value is available inside the object. It checkts for own property and
 * prototype properties*/
if( "flag" in myObj ) {
  console.log( "The flag property exists." );
} else {
  console.log( "The flag property does not exist" );
}

if( "zero" in myObj ) {
  console.log( "The zero property exists." );
} else {
  console.log( "The zero property does not exist" );
}

if( "negative" in myObj ) {
  console.log( "The negative property exists." );
} else {
  console.log( "The negative property does not exist" );
}

if( "otherObj" in myObj ) {
  console.log( "The otherObj property exists." );
} else {
  console.log( "The otherObj property does not exist" );
}

/*in order to check for own property inside an object exclusively, the function hasOwnProperty() can be used to check
 * for own property*/

var Persons = function( name ) {
  this.name = name;
  this.legs = 2;
  this.arms = 2;
};

Persons.eyes = 2;
Persons.prototype.sayName = function() {
  return this.name;
};

var person1 = new Persons( "Ronny" );

//in this case it returns that sayName is a property of person1 because the operator "in" does not discriminate
if( "sayName" in person1 ) {
  console.log( "sayName is a property of Persons." );
} else {
  console.log( "sayName is not a property of Persons." );
}

//in this case it returns that sayName is NOT a property of person1 because hasOwnProperty only checks for own properties
//and sayName is a property added with prototype
if( person1.hasOwnProperty( "sayName" ) ) {
  console.log( "sayName is a property of Persons." );
} else {
  console.log( "sayName is not a property of Persons." );
}

//in this case it returns that sayName is NOT a property of person1 even thought the "in" operator is being used. That
//is because sayName is part of the instances of Persons
if( "sayName" in Persons ) {
  console.log( "sayName is a property of Persons." );
} else {
  console.log( "sayName is not a property of Persons." );
}

//returns 2
console.log( "before deleting person1.legs: " + person1.legs );
//the property legs is deleted from person1 instance of the Person object
console.log( "deleting person1.legs: " + delete person1.legs );
//it returns undefined because the property was deleted
console.log( "after deleting person1.legs: " + person1.legs );

// ENUMERATION

console.log( "ENUMERATION:" );

var Vehicle = function( wheels, loc ) {
  this.vehicle = "Vehicle";//this was only added to be printed to the console
  this.wheels = wheels;
  this.loc = loc;
};

Vehicle.prototype.move = function() {
  this.loc++;
};

var Car = function( loc, color ) {
  Vehicle.call( this, 4, loc );
  this.class = "Car";//this was added only to be printed to the console
  this.color = color;
};

Car.prototype = Object.create( Vehicle.prototype );

var honda = new Car( 1, "red" );

//this allows the keys of the honda instance to be accessed later in the program
var properties = Object.keys( honda );

//in this case it iterates through the properties even those added using prototype
for( var keys in honda ) {
  console.log( "name: " + keys );
  console.log( "value: " + honda[ keys ] );
}
console.log( "mimicking for in:" );

//this for loops mimics the for in loop above except that it only iterates through the own properties and not the ones
//added by prototype
for( var i = 0; i < properties.length; i++ ) {
  console.log( "name: " + properties[ i ] );
  console.log( "value : " + honda[ properties[ i ] ] );
}

//checking if a property is enumerable
var person2 = {
  name : "Ronny"
};

properties = Object.keys( person2 );

console.log( "is name in person2: ", "name" in person2 );
//name is enumerable because is a custom property in the person2 instance
console.log( "is name enumerable: ", person2.propertyIsEnumerable( "name" ) );
console.log( "is length in properties: ", "length" in properties );
//length is not enumerable because most native (built-in) properties have their enumerable attribute set to false
console.log( "is length enumerable: ", properties.propertyIsEnumerable( "length" ) );

// PROPERTY TYPES

console.log( "~~PROPERTY TYPES~~" );

var person3 = {

  _name : 'Christian',//this is a data type because is a property that holds a value. the leading underscore is used as
                      //convention to show that the name variable is considered to be private althought it is technically public

  //accessor properties

  /*“Accessor properties are most useful when you want the assignment of a value to trigger some sort of behavior, or
   when reading a value requires the calculation of the desired return value”

   Excerpt From: Nicholas C. Zakas. “The Principles of Object-Oriented JavaScript.” iBooks. https://itun.es/us/hZ641.l*/

  //this is considered a getter property because its function is to return the value of the name property
  get name() {
    console.log( 'Reading name ' );//this is read everything the getter is called
    return this._name;
  },

  //this is considered a setter property because its function is to set the value of the name property
  set name( value ) {
    console.log( 'Setting the name to %s', value );//this is read every time the setter is called
    this._name = value;
  }

};

console.log( person3.name );//by using this syntax the getter property is being called

person3.name = "Alain";//using this syntax calls the setter so the name property is now set to Alain
console.log( person3.name );//again the getter is called

// PROPERTY ATTRIBUTES

console.log( "~~PROPERTY ATTRIBUTES~~" );

// common attributes

//one of the common attributes is Enumerable which determines if a property can be iterated over

//the other is Configurable which determines if a property can be changed

var person4 = {
  name : "Leslie"
};

Object.defineProperty( person4, 'name', { enumerable : false } );//this makes the property name not enumerable

console.log( "name in person4", 'name' in person4 );

console.log( "is name enumerable", person4.propertyIsEnumerable( 'name' ) );

Object.defineProperty( person4, 'name', { configurable : false } );//this makes the name property not available for modification

delete person4.name;//attempts to delete the name property that was just set to not configurable

console.log( 'is name in person4: ', 'name' in person4 );//this returns true because name was not deleted

//Object.defineProperty( person4, 'name', { configurable : true});//this cannot be done because it was previously set to false

/*data properties also have two extra attributes, Value and Writable. Value simply holds the value of the property and
 * Writable holds a Boolean value that makes the property writable or not.*/

var person5 = {};//empty object literal to be filled later using the .defineProperty() method.
var person6 = {};

//this methods first looks to see in the name property already exists and if it doesnt it creates it
Object.defineProperty( person5, '_name', {
  value : 'Christian',
  enumerable : true,
  configurable : true,
  writable : true
} );

//in this case enumerable, configurable and writable are all set to false because that is their default value when
//they have not been explicitly set to true. The property name in this case is only readable.
Object.defineProperty( person6, '_name', {
  value : 'Alain'
} );

console.log( person5._name );//this returns Christian because the property was created with defineProperty().

/*accessor properties have their own attributes, Set and Get which contain the setter and getter properties.*/

//in this case the defineProperty() method is being used to create the Accessor properties. Notices that "name" and not
//"_name" is being used as a parameter of the defineProperty() method. This is because that would be the name of the
//accessor property. This is equivalent to creating the property as follows: get name(){ return this._name }
Object.defineProperty( person5, 'name', {
  set : function( value ) {
    console.log( 'Set name to %s' );
    this._name = value;
  },
  get : function() {
    console.log( 'Return name: ' );
    return this._name;
  },
  enumerable : true,
  configurable : true
} );

console.log( person5.name );//

// defining multiple properties

var person7 = {};

//the following creates multiple properties at once which it would be the same a calling defineProperty() multiple times
Object.defineProperties( person7, {
  //data property to store data
  _name : {
    value : 'Nicholas',
    enumerable : true,
    configurable : true,
    writable : true
  },
  //accessor properties
  name : {
    get : function() {
      return this._name;
    },
    set : function( value ) {
      this._name = value;
    },
    enumerable : true,
    configurable : true
  }
} );

console.log( person7.name );

// retrieving property attributes

console.log( Object.getOwnPropertyDescriptor( person7, '_name' ) );
console.log( Object.getOwnPropertyDescriptor( person7, 'name' ) );

var descriptor = Object.getOwnPropertyDescriptor( person7, '_name' );

//this are ways to access each of the attributes of each property if wanted
console.log( "descriptor.value: ", descriptor.value );
console.log( "descriptor.configurable: ", descriptor.configurable );

console.log( "" );

console.log( "~~PREVENTING OBJECT MODIFICATION~~" );

console.log( "" );

// PREVENTING OBJECT MODIFICATION

/*If an object is Extensible it means that new properties can be added at any time to the object. This can be change
 * by using the Object.preventExtensions(). After this no more properties can be added to object.*/

/* using Object.preventExtensions( obj ) : sets the Extensible attribute to false and no more property can be added
 *
 *  using Object.seal( obj ) : sets the Extensible attribute to false and the Configurable attribute to false so not
 *  more properties can be added or properties cannot be deleted or modified
 *
 *  using Object.freeze ( obj ) : sets the Extensible attribute to false, the Configurable attribute to false and Wrteable
 *  attribute to false. Essentially the object becomes read-only and it cannot be unfrozen later.*/

var person8 = {};

//this returns true because the Object attribute Extensible is set to true when created
console.log( "is person8 extensible: ", Object.isExtensible( person8 ) );

//this works because person8 is extensible so it can be accessed
person8.firstName = "Ronny";
console.log( 'person8.firstName: ', person8[ 'firstName' ] );

//now extension attribute is being set to false and so no more properties can be added
Object.preventExtensions( person8 );

//this returns false because person8 was set to Extensible = false
console.log( "is person8 extensible", Object.isExtensible( person8 ) );

//in this case it logs undefined because lastName was never added to the object
person8.lastName = "Rosabal";
console.log( "person8.lastName: ", person8.lastName );

//this logs false because although person8 is no longer extensible, the configurable attribute is still set to true (object not sealed)
console.log( "is person8 sealed: ", Object.isSealed( person8 ) );

//this logs false because the object has only been changed to nonextensible and properties can still be changed and the property types
//can be changed
console.log( "is person8 frozen: ", Object.isFrozen( person8 ) );


var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";
var scrambled_array = scrambled_poem.split(' ');
var unscrambled_array = [];
var i = scrambled_array.length / 2;
while (scrambled_array.length > 0) {
  unscrambled_array += scrambled_array.shift();
  unscrambled_array += " ";
  if(scrambled_array.length === 0){
    break;
  }
  unscrambled_array += scrambled_array.pop();
  unscrambled_array += " ";
  i--;
}

console.log(unscrambled_array);