'use strict';
var count = function (arr,a) {
  var k=0;
  for (let item of arr)
  {
    if(item===a)
    {k++;}
    if(k>1)
    {return false;}
  }
  return true;
}

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var ans = [];
  var collection = collection_a.concat(collection_b);
  for (let c of collection)
  {
    if(count(collection,c))
    {ans.push(c);}
  }
  return ans;
}

module.exports = choose_no_common_elements;
