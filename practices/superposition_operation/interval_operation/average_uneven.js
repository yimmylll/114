'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var ans=0,k=0;
  for(let item of collection)
  {
    if(item<11&&item%2!=0)
    {
      ans+=item;
      k++;
    }
  }
  return ans/k;
}

module.exports = average_uneven;
