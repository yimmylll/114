'use strict';
var trans = function (c) {
  var ans;
  ans=String.fromCharCode(c+96);
  return ans;
}

function even_to_letter(collection) {
  //在这里写入代码
  var ans = [];
  for(let item of collection)
  {
    if(item%2===0)
    {
      ans.push(trans(item));
    }
  }
  return ans;
}

module.exports = even_to_letter;
