'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var ans = [];
  for (let item of collection_b)
  {
    if(collection_a.indexOf(item)!=-1)
    {ans.push(item);}
  }
  return ans;
}

module.exports = get_intersection;
