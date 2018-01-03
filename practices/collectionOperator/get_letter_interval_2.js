'use strict';

function get_letter_interval_2(a,b) {
  //在这里写入代码String.fromCharCode(96+i)
  var ans = [];
  if(a===b)
  {
    if(a>26)
    {
      ans.push(String.fromCharCode(96+parseInt(a/26))+String.fromCharCode(96+parseInt(a%26)));
    }
    else
    {ans.push(String.fromCharCode(96+a));}
  }

  if (a<b)
  {
    for (var i=a;i<=b;i++)
    {
      if(i>26)
      {
        if(i%26===0)
        {ans.push(String.fromCharCode(96+parseInt(i/27))+'z');}
        else
        {ans.push(String.fromCharCode(96+parseInt(i/26))+String.fromCharCode(96+i%26));}

      }
      else
      {ans.push(String.fromCharCode(96+i));}
    }
  }
  if(a>b)
  {
    for (i=a;i>=b;i--)
    {
      if(i>26)
      {
        if(i%26===0)
        {ans.push(String.fromCharCode(96+parseInt(i/27))+'z');}
        else
        {ans.push(String.fromCharCode(96+parseInt(i/26))+String.fromCharCode(96+i%26));}
      }
      else
      {ans.push(String.fromCharCode(96+i));}
    }
  }
  return ans;
}

module.exports = get_letter_interval_2;

