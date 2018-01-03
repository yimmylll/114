'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var k1=0,k2=0,k3=0,k4=0;
  for (let c of collection)
  {
    if(c===1)
    {k1++;}
    else if(c===2)
    {k2++;}
    else if(c===3)
    {k3++;}
    else if(c===4)
    {k4++;}
  }
  return {'1':k1 , '2':k2 , '3':k3 , '4':k4};
}

module.exports = grouping_count;
