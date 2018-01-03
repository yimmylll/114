'use strict';

function get_integer_interval(a,b) {
  //在这里写入代码
  var ans = [];
  if(a===b)
  {ans.push(a);}
  else if(a<b)
  {
    for (var i=a;i<=b;i++)
    {ans.push(i);}
  }
  else
  {
    for (i=a;i>=b;i--)
    {ans.push(i);}
  }
  return ans;
}

module.exports = get_integer_interval;

