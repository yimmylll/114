'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var ans=0;
  for (let c of collection)
  {
    if(c>ans)
    {ans=c;}
  }
  return ans;
}

module.exports = collect_max_number;
