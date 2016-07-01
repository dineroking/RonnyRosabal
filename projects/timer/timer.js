/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 6/26/16
 * Time: 1:13 PM
 * Content: main javascript for the timer project
 */

var activeNav;
var today;
var timeHolder = $("#timeHolder");

var navToggler = function(){
  $("a").removeClass("active");
  $(this).addClass("active");
};

$("a").on("click", navToggler);

setInterval(function(){
  today = new Date();
  timeHolder.html(today);
}, 500 );