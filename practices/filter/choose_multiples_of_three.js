'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var ans = [];
  for (let c of collection)
  {
    if(c%3===0)
    {ans.push(c);}
  }
  return ans;
}

module.exports = choose_multiples_of_three;
