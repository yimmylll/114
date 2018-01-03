'use strict';

function choose_even(collection) {

  //在这里写入代码
  var ans = [];
  for (let item of collection)
  {
    if(item%2===0)
    {ans.push(item);}
  }
  return ans;
}

module.exports = choose_even;
