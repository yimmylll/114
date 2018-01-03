'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var temp;
  for (var i=0;i<collection.length;i++)
  {
    if(collection[i]===element)
    {temp = i;}
  }
  return temp;
}

module.exports = calculate_elements_sum;
