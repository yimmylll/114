'use strict';
var count = function (arr,elem) {
  var k = 0;
  for(let item of arr)
  {
    if(item===elem)
    {k++;}
    if(k>1)
    {return false;}
  }
  return true;
}

var single_element = function(collection){
  var k = parseInt(collection.length/2);
  var arr = [];//偶数个数
  var ans = [];
  for(var i = 1;i <= k;i++)
  {
    arr.push(collection[2*i-1]);
  }
  for(i=0;i<arr.length;i++)
  {
    if(count(arr,arr[i]))
    {ans.push(arr[i]);}
    else
    {continue;}
  }
  return ans;
};

module.exports = single_element;
