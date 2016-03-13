/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/1/16
 * Time: 6:42 PM
 * Content: Learning about inheritance
 */

/*~~INHERITANCE~~*/
console.log( '~~INHERITANCE~~' );

/* All objects have a prototype object, and such object inherits from Object or Object.prototype. When an object literal
 is declared its prototype object is set to Object.prototype*/

var book = {
  title : 'My life Story',
  author : 'Ronny'
};

console.log( Object.getPrototypeOf( book ) );
console.log( Object.isPrototypeOf( book ) );
console.log( book.valueOf() );

var currentDate = new Date();
var marriageDate = new Date( 2014, 4, 30 );

/*all objects inherit from the Object.prototype multiple methods including valueOf() which is used in this case. 'currentDate',
 * and 'marriageDate' are both instances of the Date object and therefore inherit from the Object.prototype. When a comparison
 * or in this case an operator is used, the valueOf() method is called on both of them and a time stamp is return which
 * allows for the operation to be done.*/
console.log( 'Number of days since married: ', (currentDate - marriageDate) / ( /*milli*/1000 * /*secs*/60 * /*mins*/60 * /*hours*/24) );

console.log( 'toString() default: ' + book );
//changing the default behavior of toString() for the book object
book.toString = function(){
  return 'My life Story';
};
console.log( 'toString() custom: ' + book );

/*although Object prototype can be modified it is highly recommended to NOT do this because it can have unintended consequences.*/

Object.prototype.add = function( value ){
  return this + value;
};

console.log( 'book.add( 5 ): ', book.add( 5 ) );

/*another unintended consequence of modifying the Object.prototype is that this new property is enumerable and the code
 * may end up becoming really long. Using a normal for in loop shows that add property is enumerable for book object*/

for( var prop in book ) {
  console.log( 'enumerable:', prop );
}

console.log( '' );

/*in this case a for in loop is also used but each property is checked to see if they are own properties and only logs
 * those that are. The add property will not be logged.*/
for( var prop in book ) {
  if( book.hasOwnProperty( prop ) ) {
    console.log( 'own property:', prop );
  }
}

// OBJECT INHERITANCE
console.log( '' );
console.log( '~~OBJECT INHERITANCE~~' );
console.log( '' );

//this is the same as the declaration below except that it is done implicitly
var obj = {
  name : 'myObj'
};
//this is exactly the same as the object literal above, except that is declared explicitly
obj = Object.create( Object.prototype, {
  name : {
    enumerable : true,
    configurable : true,
    value : 'myObj',
    writable : true
  }
} );

var person1 = {
  name : 'Christian',
  sayName : function(){
    return this.name;
  }
};

//person2 inherits the properties (name, sayName) from person1, however, person2 has its own name property that shadows
//the name property inherited from person1. person2 has access to sayName from person1.
var person2 = Object.create( person1, {
  name : {
    enumerable : true,
    writable : true,
    configurable : true,
    value : 'Alain'
  }
} );

console.log( 'person1.sayName():', person1.sayName() );
console.log( 'person2.sayName():', person2.sayName() );
//sayName is an own property of person1 because it was declared inside of person1
console.log( 'person1.hasOwnProperty("sayName"):', person1.hasOwnProperty( "sayName" ) );
//sayName is NOT an own property of person2 because it was inherited from person1
console.log( 'person2.hasOwnProperty("sayName"):', person2.hasOwnProperty( "sayName" ) );

// CONSTRUCTOR INHERITANCE
console.log( '' );
console.log( '~~CONSTRUCTOR INHERITANCE~~' );
console.log( '' );

/*inherits from the Object.prototype*/
var Rectangle = function Rectangle( sLength, sWidth ){
  this.sLength = sLength;
  this.sWidth = sWidth;
};

Rectangle.prototype = {
  constructor : Rectangle,
  getArea : function(){
    return this.sLength * this.sWidth;
  },
  toString : function(){
    return '[Rectangle: ' + this.sLength + ' x ' + this.sWidth + ']';
  }
};

var Square = function Square( side ){
  this.sLength = side;
  this.sWidth = side;
};

var square = new Square( 5 );
console.log( 'square.constructor:', square.constructor);
//in this case [object Object] is logged because it is inheriting the toString() property from the Object.prototype
console.log( 'square.toString()', square.toString() );

Square.prototype = new Rectangle();

square = new Square( 10 );
//in this case [Rectangle: 10 x 10] is logged because it is inheriting the toString() property from the Rectangle.prototype
console.log( 'square.toString()', square.toString() );

Square.prototype.constructor = Square;

Square.prototype.toString = function(){
  return '[Square: ' + this.sLength + ' x ' + this.sWidth + ']';
};

square = new Square( 9 );
//in this case [Square: 9 x 9] is logged because it is using the toString() property from its own prototype object
console.log( 'square.toString()', square.toString() );

var rect = new Rectangle( 3, 4 );
//in this case [Rectangle: 3 x 4] is logged because it is using the toString() property from its own prototype object
console.log( 'rect.toString():', rect.toString() );

console.log('');

console.log( 'rect instanceof Object:', rect instanceof Object );//true because it inherits from Object
console.log( 'rect instanceof Rectangle:', rect instanceof Rectangle );//true because it is its own instance
console.log( 'rect instanceof Object:', rect instanceof Square );//false because Square inherits from Rectangle
console.log( 'square instanceof Object:', square instanceof Object );//true because it inherits from Object
console.log( 'square instanceof Rectangle:', square instanceof Rectangle );//true because it inherits from Rectangle
console.log( 'square instanceof Square:', square instanceof Square );//true because it is its own instance

// CONSTRUCTOR STEALING
console.log( '' );
console.log( '~~CONSTRUCTOR STEALING~~' );
console.log( '' );

var Square2 = function Square2( size ){
  Rectangle.call( this, size, size);
};

//copies the Rectangle.prototype into the Square2.prototype
Square2.prototype = Object.create( Rectangle.prototype );

/*creates a toString() property for the Square2 constructor and assigns to var text a copy of the toString() property
* in the Rectangle constructor and returns text after replacing the word 'Rectangle' with the word 'Square'. When toString()
* is called in an instance of Square2, [Square: 7 x 7] is logged.*/
Square2.prototype.toString = function(){
  var text = Rectangle.prototype.toString.call( this );
  return text.replace( 'Rectangle', 'Square' );
};

var square2 = new Square2( 7 );

console.log( 'square2.sLength:', square2.sLength );
console.log( 'square2.sWidth:', square2.sWidth );
console.log( 'square2.getArea():', square2.getArea() );
console.log( 'square2.toString():', square2.toString() );