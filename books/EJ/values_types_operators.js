/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/10/16
 * Time: 1:14 PM
 * Content:
 */


// AUTOMATIC TYPE CONVERSION

console.log( '~~AUTOMATIC TYPE CONVERSION~~' );

//type coercion is when JavaScript silently converts one data type into another data type.

//in this case null is converted to 0 before it is then multiplied by 8
console.log( '8 * null:', 8 * null);

//in this case 4 is logged because "5" is converted to 5
console.log( '"5" - 1:', "5" - 1 );

//in this case "51" is logged because "5" and 1 are being concatenated
console.log( '"5" + 1:', "5" + 1 );

//in this case NaN is logged because JacScript cannot determine that 'five' is referring to a number
console.log( 'five * 2:', 'five' * 2 );

//this logs true because the number 0 is considered the be a falsy value
console.log( 'false == 0:', false == 0 );

//this logs true because null and undefied are essentially the same thing
console.log( 'null == undefined:', null == undefined );

// SHORT-CIRCUITING LOGICAL OPERATORS

console.log('');
console.log('~~SHORT-CIRCUITING~~');
console.log('');

/*In short-circuit operations only the value to the left of the operator is always evaluated. The value to the right of
* the operator is only evaluated when necessary.*/

/*when using the || (OR) operator it converts the value to the left to a Boolean and if it is true it returns that value
* but if its false it returns the value to the right*/

//in this case null is false so it logs user
console.log( 'null || \'user\':', null || 'user' );

//in this case the string 'Ronny' is true so it logs Ronny
console.log( '\'Ronny\' || \'user\':','Ronny' || 'user' );

/*when using the && (AND) operator, it converts the value to the left to a Boolean and if it is true the value to the right
* is returned and if it is false that value is returned. Essentially working opposite to ||*/

//in this case null is false so it logs null
console.log( 'null && \'user\':', null && 'user' );

//in this case the string 'Ronny' is true so it returns user
console.log( '\'Ronny\' && \'user\':','Ronny' && 'user' );