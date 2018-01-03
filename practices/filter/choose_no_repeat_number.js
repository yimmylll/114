'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var ans=[];
  for(var i=0;i<collection.length;i++)
  {
    if(collection.indexOf(collection[i])===i)
    {ans.push(collection[i]);}
  }
  return ans;
}

module.exports = choose_no_repeat_number;
