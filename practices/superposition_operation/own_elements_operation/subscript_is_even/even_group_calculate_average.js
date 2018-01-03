'use strict';
function sortNumber(a,b) {
  return a-b;
}

var average = function (a) {
  var ans = 0;
  for (let item of a)
  {ans+=item;}
  return ans/a.length;
}

var getans = function (arr) {
  var ans = [],temp = [];
  var flag = 3;
  arr = arr.sort(sortNumber);
  for(var i=arr.length-1;i>=0;i--)
  {
    if(arr[i]/100>=1)
    {
      temp.push(arr[i]);
    }
    else if(arr[i]/10>=1)
    {
      if(flag!=2)
      {
        ans.push(average(temp));
        temp = [arr[i]];
        flag = 2;
      }
      else
      {temp.push(arr[i]);}
    }
    else
    {
      if(flag!=1)
      {
        ans.push(average(temp));
        temp = [arr[i]];
        flag = 1;
      }
      else
      {temp.push(arr[i]);}
    }
  }
  ans.push(average(temp));
  return (ans.sort(sortNumber));
}

var even_group_calculate_average = function(collection){
  var k = parseInt(collection.length/2);
  var ans = [];
  for(var i = 1;i <= k;i++)
  {
    if(collection[2*i-1]%2===0)
    {ans.push(collection[2*i-1]);}
  }
  if(ans.length===0)
  {return [0];}
  else
  {
    return getans(ans);
  }

};
module.exports = even_group_calculate_average;
