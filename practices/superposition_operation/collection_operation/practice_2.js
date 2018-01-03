'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var ans = [];
  for(let item of collection)
  {
    if(item%2===1)
    {
      ans.push(item*3+2);
    }
  }
  return ans;
}

module.exports = hybrid_operation_to_uneven;

