'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var ans=[];
  for (let a of collection_a)
  {
    if(collection_b.indexOf(a)!=-1)
    {ans.push(a);}
  }
  return ans;
}

module.exports = choose_common_elements;
