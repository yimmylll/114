'use strict';
function sortnum(a,b) {
  return a-b;
}

var rank_desc = function(collection){
  return collection.sort(sortnum);
};

module.exports = rank_desc;
