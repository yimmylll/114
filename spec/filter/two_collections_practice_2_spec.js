'use strict';var count = function (arr,a) {
  var k=0;
  for (let item of arr)
  {
    if(item===a)
    {k++;}
    if(k>1)
    {return false;}
  }
  return true;
}


var choose_no_common_elements = require("../../practices/filter/two_collections_practice_2.js");

describe('choose_no_common_elements', function() {

  var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collection_b = ["a", "d", "e", "f"];

  it("选出A集合中与B集合中的不共有元素", function () {
    var result = choose_no_common_elements(collection_a, collection_b);

    expect(result).toEqual(["h", "t", "c", "g", "b"]);
  })
});

