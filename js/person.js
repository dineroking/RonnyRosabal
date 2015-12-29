/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 12/19/15
 * Time: 5:02 PM
 * Content: Person object
 */

function Person( firstName, lastName, age ) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.isLegal = function() {
  return this.age >= 18;
};