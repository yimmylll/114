'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var ans=0;
  collection = collection.map((t) => (t*3+2));
  for(let item of collection)
  {
    ans+=item;
  }
  return ans;
}

module.exports = hybrid_operation;

