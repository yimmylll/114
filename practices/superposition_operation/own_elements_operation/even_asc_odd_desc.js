'use strict';
function sorteven(a,b) {
  return a-b;
}
function sortuneven(a,b) {
  return b-a;
}

var even_asc_odd_desc = function(collection){
  var even = [],uneven = [];//oushu,jishu
  for(let item of collection)
  {
    if(item%2===0)
    {even.push(item);}
    else
    {uneven.push(item);}
  }
  return even.sort(sorteven).concat(uneven.sort(sortuneven));
};
module.exports = even_asc_odd_desc;
