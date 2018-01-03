'use strict';

function compute_average(collection) {
  //在这里写入代码
  var ans=0;
  for (let c of collection)
  {
    ans+=c;
  }
  return ans/collection.length;
}

module.exports = compute_average;

