'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var ans=0;
  for (let item of collection)
  {
    ans+=item;
  }
  ans=ans/collection.length;
  return String.fromCharCode(Math.ceil(96+ans));
}

module.exports = average_to_letter;

