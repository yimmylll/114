'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var ans=0;
  for (let c of collection)
  {ans+=c;}
  return ans;
}

module.exports = calculate_elements_sum;

