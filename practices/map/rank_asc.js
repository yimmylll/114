'use strict';
function sortnum(a,b) {
  return b-a;
}

var rank_asc = function(collection){
  return collection.sort(sortnum);
};

module.exports = rank_asc;
