/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 9/28/15
 * Time: 4:21 PM
 * Content: main javascript of ronnyrosabal.com
 */



/**************************************
Table of Content
***************************************/

/*
* #GLOBAL VARIABLES
*
*
*
* #FUNCTIONS
*
*
*
* #OBJECTS
*
*
*
* #FUNCTION CALLS
*/



/**************************************
#GLOBAL VARIABLES
***************************************/

var body = document.getElementsByTagName('body');
var logo = document.getElementById('logo');
var header = document.createElement('header');
var heading1 = document.createElement('h1');
var logoName = document.createTextNode('ronnyrosabal');
header.appendChild(heading1).appendChild(logoName);
logo.appendChild(header);
var headerLogo = logo.getElementsByTagName('header')[0];
setAttribute(headerLogo, 'class', 'navbar-header');
var h1Logo = logo.getElementsByTagName('h1')[0];
setAttribute(h1Logo, 'class', 'navbar-brand');



/**************************************
#FUNCTIONS
***************************************/

function setAttribute( element, attr, value ){

  var att = document.createAttribute(attr);
  att.value = value;
  element.setAttributeNode(att);

}



/**************************************
#OBJECTS
***************************************/



/**************************************
#FUNCTION CALLS
***************************************/