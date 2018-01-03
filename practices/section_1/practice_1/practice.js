function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var ans = [];
  for(let item of collection_a)
  {
    if (collection_b.includes(item))
    {
      ans.push(item);
    }
  }
  return ans;
}

module.exports = collect_same_elements;
