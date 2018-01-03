'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var ans = [];
  if(number%interval===0)
  {
    for (var i=0;i<=number/interval;i++)
    {ans.push(parseFloat((number-i*interval).toFixed(1)));}
  }
  else
  {
    for (i=0;i<=Math.ceil(number/interval);i++)
    {ans.push(parseFloat((number-i*interval).toFixed(1)));}
  }
  return ans;
}

module.exports = spilt_to_zero;
