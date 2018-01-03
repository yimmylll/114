'use strict';

function get_integer_interval_2(a,b) {
  //在这里写入代码
  var ans = [];
  if(a===b)
  {
    if(a%2===0)
    {ans.push(a);}
  }
  if(a<b)
  {
    for (var i=Math.ceil(a/2);i<=parseInt(b/2);i++)
    {ans.push(2*i);}
  }
  if(a>b)
  {
    for (i=parseInt(a/2);i>=Math.ceil(b/2);i--)
    {ans.push(2*i);}
  }
  return ans;
}

module.exports = get_integer_interval_2;
