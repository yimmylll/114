'use strict';
function sortNumber(a,b) {
  return a-b;
}

function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection = collection.sort(sortNumber);
  var k = parseInt(collection.length/3);
  var temp;
  for(var i=0;i<k;i++)
  {
    temp=collection[3*i];
    collection[3*i]=collection[3*i+1];
    collection[3*i+1]=collection[3*i+2];
    collection[3*i+2]=temp;
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
