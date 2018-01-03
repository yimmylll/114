function count_same_elements(collection) {
  //在这里写入代码
  var ans=[];
  var i=0;
  var k='a';
  var c=0;
  for(let item of collection)
  {
    if(item.length==1)
    {
      if(item==k)
      {
        c++;
      }
      else
      {
        ans[i]=new Object();
        ans[i].key=k;ans[i].count=c;
        i++;
        k=item;
        c=1;
      }
    }
    else
    {
      ans[i]=new Object();
      ans[i].key=k;ans[i].count=c;
      i++;
      k=item.substring(0,1);
      c=parseInt(item.substring(2));
    }
  }
  ans[i]=new Object();
  ans[i].key=k;ans[i].count=c;
  return ans;
}

module.exports = count_same_elements;
