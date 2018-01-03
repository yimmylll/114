'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  collection_a=collection_a.concat(collection_b);
  collection_b=[];
  for(var i=0;i<collection_a.length;i++)
  {
    if(collection_a.indexOf(collection_a[i])===i)
    {collection_b.push(collection_a[i]);}
  }
  return collection_b;
}

module.exports = get_union;

