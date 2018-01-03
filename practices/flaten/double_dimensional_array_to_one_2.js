'use strict';

function double_to_one(collection) {

  //在这里写入代码
  collection = [].concat.apply([],collection);
  var ans = [];
  for (var i=0;i<collection.length;i++)
  {
    if(collection.indexOf(collection[i])===i)
    {ans.push(collection[i]);}
  }
  return ans;
}

module.exports = double_to_one;
