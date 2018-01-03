'use strict';
var calculate_median = function(collection){

  var k = parseInt(collection.length/2);//偶数个数元素的个数
  if(k%2===0)
  {
    return (collection[k-1]+collection[k+1])/2;
  }
  return collection[k];
};
module.exports = calculate_median;
