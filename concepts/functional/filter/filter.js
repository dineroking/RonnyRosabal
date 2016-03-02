/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 2/23/16
 * Time: 5:40 PM
 * Content:
 */

var jsonData;
var jsonFile = 'http://localhost:8888/RonnyRosabal/concepts/functional/filter/filter.json';
var jsonData = $.getJSON( 'filter.json', function( data ){
  return data;
});

/*$.ajax(
  {
    dataType : 'json',
    url : 'filter.json',
    data : data,
    success : getJason
  }
);*/

console.log(jsonData);