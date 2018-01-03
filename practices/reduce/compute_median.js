'use strict';
function sortnum(a,b) {
  return a-b;
}

function compute_median(collection) {
  //在这里写入代码
  var k = collection.length;
  collection = collection.sort(sortnum);
  if(k%2!=0)
  {
    return collection[parseInt(k/2)];
  }
  else
  {
    return (collection[k/2]+collection[k/2-1])/2;
  }
}

module.exports = compute_median;


