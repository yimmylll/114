'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var mid;
  var k = collection.length;
  if (k%2===0)
  {
    mid = Math.ceil((collection[k/2-1]+collection[k/2])/2);
  }
  else
    mid = collection [(k-1)/2];

  if(mid>26)
  {
    return String.fromCharCode(parseInt(mid/26)+96,96+(mid%26))
  }
  return String.fromCharCode(96+parseInt(mid));
}

module.exports = median_to_letter;
