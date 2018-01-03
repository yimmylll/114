function count_same_elements(collection) {
  //在这里写入代码
  var i=0;
  var ans=[];
  var k='a';
  var c=0;
  for(let item of collection)
  {
    if(item===k)
    {
      c++;
    }
    else
    {
      ans[i]={key:k,count:c};
      //   ans[i].key=k;ans[i].count=c;
      i++;
      k=item;
      c=1;
    }
  }
  ans[i]={key:k,count:c};
  return ans;
}

module.exports = count_same_elements;
