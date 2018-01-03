'use strict';
var calculate_average = function(collection){
  var ans=0;
  var k = parseInt(collection.length/2);
  for(var i=1;i<=k;i++)
  {
    ans+=collection[i*2-1];
  }
  return ans/k;
};
module.exports = calculate_average;
