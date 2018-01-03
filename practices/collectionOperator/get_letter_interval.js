'use strict';

function get_letter_interval(a,b) {
  //在这里写入代码
  var ans = [];
  if(a===b)
  {ans.push(String.fromCharCode(96+a));}
  else if(a<b)
  {
    for (var i=a;i<=b;i++)
    {ans.push(String.fromCharCode(96+i));}
  }
  else
  {
    for (i=a;i>=b;i--)
    {ans.push(String.fromCharCode(96+i));}
  }
  return ans;
}

module.exports = get_letter_interval;
