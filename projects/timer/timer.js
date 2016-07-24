/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 6/26/16
 * Time: 1:13 PM
 * Content: main javascript for the timer project
 */

$( window ).load( function(){
  var activeNavId, 
    today, 
    dateTimer, 
    days, 
    hours, 
    minutes, 
    seconds,  
    timeHolder = $( "#timeHolder" ),
    navAnchors = $("nav a");

  //NAV MENU

  /*
  * 1. take the first item of the navAnchors array and add the class first
  * 2. take the last item of the navAnchors array and add the class last
  */
  var navFirstAndLast = function(){
    $(navAnchors[0]).addClass("first");
    $(navAnchors[navAnchors.length - 1]).addClass("last");
  };

  /*
  * 1. make an array of all anchors with the class of active which is should be just one if its called after navToggler
  * 2. assign the first item the array to activeNavId which will be later used to display the form
  */
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
    clearTime();
    getActiveNav();
    formVisibility();
  } );


  //ALL FORMS

  var formVisibility = function(){
    var formId = "#" + activeNavId + "_form";
    $("form").css("display", "none");
    $(formId).css("display", "block");
  };

  var clearTime = function(){
    $("span#timeHolder").html("");
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
    days = Math.abs( Math.floor( timeLeft / ( 1000 * 60 * 60 * 24 ) ) );
    hours = Math.floor( timeLeft / ( 1000 * 60 * 60 ) % 24  );
    minutes = Math.floor( timeLeft / (1000 * 60 ) % 60 );
    seconds = Math.floor( timeLeft / ( 1000 ) % 60 );
    return days + "d . " + hours + "h . " +  minutes + "m . " + seconds + "s";
  };

  $("#date_submit").on("click", function( event ){
    event.preventDefault();
    getDateTimer();
    getTimeLeft();
    setTimeLeft();
  } );

  var setTimeLeft = function(){
    setInterval( function(){
      var timeLeft = getTimeLeft();
      timeHolder.html( timeLeft );
    }, 500);
  };

  //CLOCK FORM

  var getTodaysDate = function(){
    today = new Date();               // this is needed, otherwise today variable value is not accessible because of setInterval
    if( activeNavId === "clock" ){
      setInterval( function(){
        today = new Date();
        timeHolder.html( today );
      }, 500 );
    }
  };

  /**
   *
   * @returns { the timezone offset in hours }
   */
  var userTimeZone = function(){
    var form = $("form#clock_form [selected]").val();
    var zoneOffset;

    switch(form){
      case "EST":
        zoneOffset = 4;
        break;
      case "CST":
        zoneOffset = 5;
        break;
      case "MST":
        zoneOffset = 6;
        break;
      case "PST":
        zoneOffset = 7;
        break
    }
    console.log( zoneOffset );
    return zoneOffset;
  };

  // when the user changes timezone option it gets rid of the selected attribute of the current option and assigns
  // it to the new option
  $("#clock_form select").on("change", function(){
    var selected = $(this).val();
    $("[selected]").removeAttr("selected");
    $("[value=" + selected + "]").attr("selected", "selected");
  });

  //TODO: finish getting timezone offset
  var getTimeZoneOffset = function(){

  };

  //TODO: finish calculating the difference between the current time zone and selected time zone
  $("#clock_input").on("click", function(){
    userTimeZone();
  });

  //FUNCTION CALLS WHEN DOCUMENT LOADS

  getActiveNav();
  getDateTimer();
  navFirstAndLast();
  formVisibility();
  getTodaysDate();


} );



