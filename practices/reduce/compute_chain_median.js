'use strict';
function sortnum(a,b) {
  return a-b;
}

function compute_chain_median(collection) {
  //在这里写入代码
  collection = collection.split("->");
  collection = collection.sort(sortnum);
  var k = collection.length;
  if(k%2===0)
  {
    return ((parseInt(collection[k/2-1])+parseInt(collection[k/2]))/2);
  }
  else
  {return parseInt(collection[parseInt(k/2)]);}
}

module.exports = compute_chain_median;
