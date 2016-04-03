/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/22/16
 * Time: 11:38 AM
 * Content:
 */

// PROTOTYPES



Array.prototype.concatAll = function(){
  var results = [];
  this.forEach( function( subArray ){
    results.push.apply( results, subArray );
  } );
  return results;
};


// EXERCISE 1

// Print all the names in an array using a for loop

console.log("EXERCISE 1");

var printer = function(){
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
    counter,
    arrayLength = names.length;

  for( counter = 0; counter < arrayLength; counter++ ){
    console.log( names[ counter ] );
  }
};

printer();


// EXERCISE 2

// Use forEach() to print all the names in an array

console.log( "EXERCISE 2" );

var eachPrinter = function(){
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"]
  names.forEach( function( name, index, array ){
    console.log( name );
  } );
};

eachPrinter();


// EXERCISE 3

// For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

console.log( "EXERCISE 3" );

(function(){
  var newReleases = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id:432534, time:65876586 }]
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ],

    videoAndTitlePairs = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate {id, title} pairs from each video.
  // Put the results into the videoAndTitlePairs array using the Array's
  // push() method. Example: videoAndTitlePairs.push(newItem);
  // ------------ INSERT CODE HERE! -----------------------------------

  newReleases.forEach( function( movie, index, array ){
    videoAndTitlePairs.push( { "id" : movie.id, "title" : movie.title } );
  });
  console.log( videoAndTitlePairs );
  return videoAndTitlePairs;
})();

// EXERCISE 4

/*To make projections easier, let's add a map() function to the Array type. Map accepts the projection function to be applied to each item in the source array, and returns the projected array.*/

console.log( "EXERCISE 4" );

Array.prototype.map = function( action ){
  var result = [];
  this.forEach( function( value, index, array ){
    result.push( action( value ) );
  });
  return result;
};


// EXERCISE 5

//Let's repeat the exercise of collecting {id, title} pairs for each video in the newReleases array, but this time we'll use our map function.

console.log( "EXERCISE 5" );

var movieMap = function(){
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use map function to accumulate {id, title} pairs from each video.
  return newReleases.map(function( movie ){
    return { "id" : movie.id, "title" : movie.title };
  }); // finish this expression!
  // ------------ INSERT CODE HERE! -----------------------------------
};

console.log( JSON.stringify(movieMap()) );

// EXERCISE 6

// Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array.

console.log( "EXERCISE 6" );

var eachHighRating = function(){
  var newReleases = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ],
    videos = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate every video with a rating of 5.0
  // ------------ INSERT CODE HERE! -----------------------------------
  var highRating = function( movie, index, array ){
    if( movie.rating === 5.0 ){
      videos.push( { "title" : movie.title, "rating" : movie.rating } );
    }
  };
  newReleases.forEach( highRating );
  return videos;
};

console.log( JSON.stringify( eachHighRating() ) );

// EXERCISE 7

/*To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a predicate. A predicate is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.*/

Array.prototype.filter = function( test ){
  var results = [];
  this.forEach( function( value, index, array ){
    if( test( value ) ){
      results.push( value );
    }
  } );
  return results;
};

// EXERCISE 8

// Chain filter and map to collect the ids of videos that have a rating of 5.0

console.log( "EXERCISE 8" );

var movieFilterMapHighRating = function(){
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Chain the filter and map functions to select the id of all videos
  // with a rating of 5.0.

  return newReleases.filter( function( movie ){
    if( movie.rating === 5.0 ){
      return movie;
    }
  } )
    .map( function( movie ){
      return { "id" : movie.id };
    }); // Complete this expression
  // ------------ INSERT CODE HERE! -----------------------------------
};

console.log( JSON.stringify( movieFilterMapHighRating() ) );

// EXERCISE 9

// Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.

console.log( "EXERCISE 9" );

var movieFlatten = function(){
  var movieLists = [
      {
        name: "New Releases",
        videos: [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
          }
        ]
      },
      {
        name: "Dramas",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
          }
        ]
      }
    ],
    allVideoIdsInMovieLists = [];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  movieLists.forEach( function( category, index, array ){
    category.videos.forEach( function( video, index, array ){
      allVideoIdsInMovieLists.push( video.id );
    } );
  } );

  return allVideoIdsInMovieLists;
};

console.log( movieFlatten() );


// EXERCISE 10

/*Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.*/

Array.prototype.concatAll = function(){
  var results = [];
  this.forEach( function( subArray, index, array ){
    subArray.forEach( function( item, index, array ){
      results.push( item );
    } );
  } );
  return results
};


// EXERCISE 11

// Use map() and concatAll() to project and flatten the movieLists into an array of video ids

console.log( "EXERCISE 11" );

var movieMapFlatten = function(){
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "Dramas",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return movieLists.map( function( category ){
    return category.videos.map( function( video ){
      return video.id;
    } );
  }).concatAll(); // Complete this expression!
};

console.log( movieMapFlatten() );


// EXERCISE 12

//Retrieve id, title, and a 150x200 box art url for every video

console.log( "EXERCISE 12" );

var retrieveIdTitleArt = function(){
  var movieLists = [
    {
      name: "Instant Queue",
      videos : [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];


  // Use one or more map, concatAll, and filter calls to create an array with the following items
  // [
  //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists.map( function( category ){
    return category.videos.map( function( video ){
      return video.boxarts.filter( function( art ){
        return art.width === 150;
      } ).map( function( art ){
        return { "id" : video.id, "title" : video.title, "boxart" : art.url };
      } );
    } ).concatAll();
  }).concatAll(); // Complete this expression!
};

console.log( retrieveIdTitleArt() );


// EXERCISE 13

// Implement concatMap()

/*Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.*/

Array.prototype.concatMap = function( action ){
  return this.map( function( item ){
    return action( item );
  } ).concatAll();
};

// EXERCISE 14

// Use concatMap() to retrieve id, title, and 150x200 box art url for every video

/*Let's repeat the exercise we just performed. However this time we'll simplify the code by replacing the map().concatAll()
calls with concatMap().*/

console.log( "EXERCISE 14" );

var titleIdConcatMap = function(){
  var movieLists = [
    {
      name: "Instant Queue",
      videos : [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];


  // Use one or more concatMap, map, and filter calls to create an array with the following items
  // [
  //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists.concatMap( function( category ){
    return category.videos.concatMap( function( video ){
      return video.boxarts.filter( function( art ){
        return art.width === 150;
      }).map( function( art ){
        return { "id" : video.id, "title" : video.title, "boxart" : art.url };
      } );
    });
  }); // Complete this expression!
};

console.log( titleIdConcatMap() );


// EXERCISE 15

// Use forEach to find the largest box art

/*In this example we use forEach to find the largest box art. Each time we examine a new boxart we update a variable with the currently known maximumSize. If the boxart is smaller than the maximum size, we discard it. If it's larger, we keep track of it. Finally we're left with a single boxart which must necessarily be the largest.*/

console.log( "EXERCISE 15" );
var findLargestArt = function(){
  var boxarts = [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ],
    currentSize,
    maxSize = -1,
    largestBoxart;

  boxarts.forEach(function(boxart) {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });

  return largestBoxart;
};

console.log( findLargestArt() );


// EXERCISE 16

/*Let's add a reduce() function to the Array type. Like map. Take note this is different from the reduce in ES5, which returns an value instead of an Array!*/

console.log( "EXERCISE 16");

Array.prototype.reduce = function( iterator, accumulator ){

  if( this.length === 0 ){
    return this;
  }
  this.forEach( function( value, index, array ){
    if( !accumulator ){
      accumulator = value;
    }else{
      accumulator = iterator( accumulator, value );
    }
  } );
  return accumulator;
};

console.log( [].reduce( function( a, b ){ return a + b } ) );


// EXERCISE 19

console.log( "EXERCISE 19" );

/*Exercise 19: Reducing with an initial value

 Sometimes when we reduce an array, we want the reduced value to be a different type than the items stored in the array. Let's say we have an array of videos and we want to reduce them to a single map where the key is the video id and the value is the video's title.


 configurable : true,
 1
 function() {
 2
 var videos = [
 3
 {
 4
 "id": 65432445,
 5
 "title": "The Chamber"
 6
 },
 7
 {
 8
 "id": 675465,
 9
 "title": "Fracture"
 10
 },
 11
 {*/

var videos = [
  {
    "id": 65432445,
    "title": "The Chamber"
  },
  {
    "id": 675465,
    "title": "Fracture"
  },
  {
    "id": 70111470,
    "title": "Die Hard"
  },
  {
    "id": 654356453,
    "title": "Bad Boys"
  }
];

//my solution
var exercise19 = function(){
  return videos.
  reduce(function(accumulatedMap, video) {
      var obj = {};

    //obj[video.id] = video.title; <-- this is their solution which is more efficient
      Object.defineProperty( obj, video.id, {
        enumerable : true,
        configurable : true,
        value : video.title
      } );

      // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
      // ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----

      // Object.assign() takes all of the enumerable properties from
      // the object listed in its second argument (obj) and assigns them
      // to the object listed in its first argument (accumulatedMap).
      return Object.assign(accumulatedMap, obj);
    },
    // Use an empty map as the initial value instead of the first item in
    // the list.
    {});
};

console.log( exercise19() );

// EXERCISE 20

console.log( "EXERCISE 20" );

/*Exercise 20: Retrieve the id, title, and smallest box art url for every video.

 This is a variation of the problem we solved earlier, where we retrieved the url of the boxart with a width of 150px. This time we'll use reduce() instead of filter() to retrieve the smallest box art in the boxarts array.*/

var movieLists20 = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
          { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
          { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
          { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ]
  },
  {
    name: "Thrillers",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
          { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
          { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
          { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
          { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
          { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ]
  }
];

var exercise20 = function(){
  return movieLists20.concatMap( function( category ){
    return category.videos.map( function( video ){
      return video.boxarts.reduce( function( prev, curr ){
        var obj = {};
        obj.id = video.id;
        obj.title = video.title;
        obj.boxarts = curr.url;
        return Object.assign( prev, obj );
      }, {})
    })
    } );
};

console.log( exercise20() );

var familyInfo = [
  {
    first : "Ronny",
    last : "Rosabal",
    age : 33,
    children : [
      { name : "Christian", age: 0, gender : "male"},
      { name : "TBD", age : -2, gender : "unknown" }
    ]
  },
  {
    first : "Leslie",
    last : "Rosabal",
    age : 29,
    children : [
      { name : "Christian", age: 0, gender : "male"},
      { name : "TBD", age : -2, gender : "unknown" }
    ]
  }
];

console.log( 'familyInfo:', familyInfo );

var mapped = familyInfo.map( function( person ){
  return {"first" : person.first, "age" : person.age, "children" : person.children };
} );

var mapped2 = familyInfo.map( function( person ){
  return person.children.reduce( function( child, curr ){
    return curr.age > child.age ? curr : child
  } );
} );
var reduced = familyInfo.reduce( function( prev, curr ){

} );

console.log( 'mapped', mapped );
console.log( 'mapped2', mapped2 );