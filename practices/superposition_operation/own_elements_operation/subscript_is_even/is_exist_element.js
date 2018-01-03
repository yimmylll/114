'use strict';
var is_exist_element = function(collection,element){
  var k = parseInt(collection.length/2);
  var ans = [];
  for(var i = 1;i <= k;i++)
  {
    ans.push(collection[2*i-1]);
  }
  if(ans.indexOf(element)===-1)
  {return false;}
  return true;
};
module.exports = is_exist_element;
