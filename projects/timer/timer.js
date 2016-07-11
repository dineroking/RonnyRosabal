/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 6/26/16
 * Time: 1:13 PM
 * Content: main javascript for the timer project
 */

$( window ).load( function(){
  var activeNavId, today, dateTimer, daysLeft, hoursLeft, minutesLeft, secondsLeft,  timeHolder = $( "#timeHolder" );

  //NAV MENU

  var getActiveNav = function(){
    var anchors = document.getElementsByClassName("active");
    activeNavId = $(anchors[0]).attr("id");
  };

  var navToggler = function( elem ){
    $( "a" ).removeClass( "active" );
    $( elem ).addClass( "active" );
  };

  $( "a" ).on( "click", function(){
    navToggler( this );
    getActiveNav();
    formVisibility();
  } );


  //ALL FORMS

  var formVisibility = function(){
    var formId = "#" + activeNavId + "_form";
    $("form").css("display", "none");
    $(formId).css("display", "block");
  };

  //DATE FORM

  var getDateTimer = function() {
    dateTimer = $("#date_input").val();
  };

  var getTimeLeft = function(){
    var targetDate = new Date( dateTimer );
    targetDate.setHours( targetDate.getHours() + 5 );// makes correction of time
    targetDate = targetDate.getTime();
    today = new Date().getTime();
    var timeLeft = targetDate - today;
    daysLeft = Math.abs( Math.floor( timeLeft / ( 1000 * 60 * 60 * 24 ) ) );
    hoursLeft = Math.floor( timeLeft / ( 1000 * 60 * 60 ) % 24  );
    minutesLeft = Math.floor( timeLeft / (1000 * 60 ) % 60 );
    secondsLeft = Math.floor( timeLeft / ( 1000 ) % 60 );
    return daysLeft + "d . " + hoursLeft + "h . " +  minutesLeft + "m . " + secondsLeft + "s";
  };

  $("#date_submit").on("click", function( event ){
    event.preventDefault();
    getDateTimer();
    getTimeLeft();
    testFunction();
  } );

  var testFunction = function(){
    setInterval( function(){
      var timeLeft = getTimeLeft();
      timeHolder.html( timeLeft );
    }, 500);
  };

  
if( activeNavId === "clock" ){

  setInterval( function(){
    today = new Date();
    timeHolder.html( today );
  }, 500 );
  
}

  //FUNCTION CALLS WHEN DOCUMENT LOADS

  getActiveNav();
  getDateTimer();

} );



