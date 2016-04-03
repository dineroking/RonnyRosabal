/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 4/3/16
 * Time: 12:45 PM
 * Content:
 */

// EXAMPLE 1


/* 'this' DOES NOT hold a value until an object invokes the function that defines 'this' */


/* in the following example 'this' refers to the object that is calling the function (method) which in this case is person*/
var person = {
  firstName : "Ronny",
  lastName : "Rosabal",
  sayPersonName : function(){
    return person.firstName + " " + person.lastName;
  },
  sayThisName : function(){
    return this.firstName + " " + this.lastName;
  }
};

console.log( 'person.sayPersonName():', person.sayPersonName() );
console.log( 'person.sayThisName():', person.sayThisName() );

var firstName = "Christian",
  lastName = "Rosabal";

/* in this other case the keyword 'this' accesses the global environment because no object calls this function and so it
 * looks for the variables firstName and lastName in the global environment*/
var sayThisName = function(){
  return this.firstName + " " + this.lastName;
};

console.log( 'sayThisName():', sayThisName() );
console.log( 'window.sayThisName():', window.sayThisName() );

var anotherPerson = {
  firstName : "Miriam",
  lastName : "Gonzalez"
};

/*in the following two cases 'this' is being set explicitly to use anotherPerson as its object */
console.log( 'sayThisName.apply( anotherPerson ):', sayThisName.apply( anotherPerson ) );
console.log( 'person.sayThisName.apply( anotherPerson )', person.sayThisName.apply( anotherPerson ) );


// CALLBACK -- 'this' when passing method as a callback

var user = {
  data : [
    { name : "Ronny", age : 33 },
    { name : "Leslie", age : 29 }
  ],
  clickHandler : function(){
    var random = Math.floor( Math.random() * 2 );
    console.log( this.data[ random ].name + " " + this.data[ random ].age );
  }
};

/*the code below does not work because $('body') is an object created in jQuery and calling user.clickHandler attaches
 * 'this' inside of the clickHandler method to the $('body') object and of course it doesn't have a data property */

//$('body').click( user.clickHandler );


// in the code below we make sure that 'this' inside of clickHandler is attached to the user object
$( 'body' ).click( user.clickHandler.bind( user ) );

// CLOSURE -- 'this' inside closure

user = {
  tournament : "The Cuban Open",
  data : [
    { name : "Ronny", age : 33 },
    { name : "Christian", age : 0 }
  ],
  clickHandler : function(){
    this.data.forEach( function( person ){
      console.log( person.name + " is playing at " + this.tournament );//this.tournament is undefined because there isnt a global tournament variable
    } );                                                               //because it is inside an anonymous function which cant be attached to any object
  },
  clickHandler1 : function(){
    var thisUserObj = this;//attaches the user1 object to thisUserObj when clickHandler1 method is called
    console.log( 'thisUserObj:', thisUserObj );
    this.data.forEach( function( person ){
      console.log( person.name + " is playing at " + thisUserObj.tournament )
    } )
  }
};

console.log( 'user.clickHandler():', user.clickHandler() );
console.log( 'user.clickHandler1()', user.clickHandler1() );


// ASSIGNMENT -- 'this' when method is assigned to a variable

var data = [
  { name : "Samantha", age : 12 },
  { name : "Alexis", age : 14 }
];

user = {
  data : [
    { name : "T. Woods", age : 37 },
    { name : "P. Mickelson", age : 43 }
  ],
  clickHandler : function(){
    var random = Math.floor( Math.random() * 2 );
    return this.data[ random ].name + " " + this.data[ random ].age;
  }
};

var callUser = user.clickHandler;//in this case 'this' is referring to the global environment and so it looks for data variable there
console.log( 'callUser():', callUser() );

callUser = user.clickHandler.bind( user );//now 'this' was explicitly attached (bound) to the user object and it looks for the local variable
console.log( 'callUser():', callUser() );


// BORROWING -- 'this' when borrowing methods

var gameController = {
  scores : [ 20, 34, 55, 46, 77 ],
  avgScore : null,
  players : [
    { name : "Tommy", playerID : 987, age : 23 },
    { name : "Pau", playerID : 87, age : 33 }
  ]
};

var appController = {
  scores : [ 900, 845, 809, 950 ],
  avgScore : null,
  avg : function(){

    var sumOfScores = this.scores.reduce( function( prev, curr ){
      return prev + curr;
    });

    this.avgScore = sumOfScores / this.scores.length;
  }
};

//gameController.avgScore = appController.avg();//it doesnt work because it is setting the avgScore inside appController

console.log( 'gameController.avgScore:', gameController.avgScore );
console.log( 'appController.avgScore:', appController.avgScore );

appController.avg.apply( gameController, gameController.scores );
console.log( 'gameController.avgScore:', gameController.avgScore );
console.log( 'appController.avgScore:', appController.avgScore );