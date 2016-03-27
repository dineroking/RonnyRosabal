/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 3/22/16
 * Time: 11:38 AM
 * Content:
 */

Array.prototype.concatAll = function(){
  var results = [];
  this.forEach( function( subArray ){
    results.push.apply( results, subArray );
  } );

  return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this.
  map(function(item) {
    // ------------   INSERT CODE HERE!  ----------------------------
    // Apply the projection function to each item. The projection
    // function will return an new child array. This will create a
    // two-dimensional array.
    // ------------   INSERT CODE HERE!  ----------------------------
    return projectionFunctionThatReturnsArray(item);
  }).
  // apply the concatAll function to flatten the two-dimensional array
  concatAll();
};

//EXERCISE 12

var movieLists12 = [
  {
    name : "Instant Queue",
    videos : [
      {
        "id" : 70111470,
        "title" : "Die Hard",
        "boxarts" : [
          { width : 150, height : 200, url : "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { width : 200, height : 200, url : "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url" : "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating" : 4.0,
        "bookmark" : []
      },
      {
        "id" : 654356453,
        "title" : "Bad Boys",
        "boxarts" : [
          { width : 200, height : 200, url : "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
          { width : 150, height : 200, url : "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

        ],
        "url" : "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating" : 5.0,
        "bookmark" : [ { id : 432534, time : 65876586 } ]
      }
    ]
  },
  {
    name : "New Releases",
    videos : [
      {
        "id" : 65432445,
        "title" : "The Chamber",
        "boxarts" : [
          { width : 150, height : 200, url : "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
          { width : 200, height : 200, url : "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url" : "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating" : 4.0,
        "bookmark" : []
      },
      {
        "id" : 675465,
        "title" : "Fracture",
        "boxarts" : [
          { width : 200, height : 200, url : "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
          { width : 150, height : 200, url : "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
          { width : 300, height : 200, url : "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url" : "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating" : 5.0,
        "bookmark" : [ { id : 432534, time : 65876586 } ]
      }
    ]
  }
];

/*Exercise 12: Retrieve id, title, and a 150x200 box art url for every video

 You've managed to flatten a tree that's two levels deep, let's try for three! Let's say that instead of a single boxart url on each video, we had a collection of boxart objects, each with a different size and url. Create a query that selects {id, title, boxart} for every video in the movieLists. This time though, the boxart property in the result will be the url of the boxart object with dimensions of 150x200px. Let's see if you can solve this problem with map(), concatAll(), and filter().

 There's just more one thing: you can't use indexers. In other words, this is illegal:

 var itemInArray = movieLists[0];

 Furthermore, you're not allowed to use indexers in any of the remaining exercises unless you're implementing one of the five functions. There is a very good reason for this restriction, and that reason will eventually be explained. For now, you'll simply have to accept it on faith that this restriction serves a purpose. :-)*/

console.log( 'EXERCISE 12' );

var exercise12 = function(){
  return movieLists12.map( function( category ){
    return category.videos.map( function( video ){
      return video.boxarts.filter( function( art ){
        return art.width === 150;
      }).map( function( art ){
          return { "id" : video.id, "title" : video.title, "boxarts" : art.url };
      });
    }).concatAll();
  }).concatAll();
};

console.log( exercise12() );

// EXERCISE 14

var exercise14 = function(){
  return movieLists12.concatMap(function( cat ){
    return cat.videos.concatMap( function( video ){
      return video.boxarts.filter( function( art ){
        return art.width === 150;
      }).map( function( art ){
        return { "id" : video.id, "title" : video.title, "boxarts" : art.url }
      } )
    });
  });
};

console.log( exercise14() );


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
      console.log( video.boxarts );
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