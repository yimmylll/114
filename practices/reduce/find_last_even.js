'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var temp;
  for (var i=0;i<collection.length;i++)
  {
    if(collection[i]%2===0)
    {temp = collection[i];}
  }
  return temp;
}

module.exports = find_last_even;
