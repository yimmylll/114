function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var ans=[];
  var i=0;
  var k='a';
  var c=0;
  for(let item of collection_a)
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
  for(var i=0;i<ans.length;i++)
  {
    for(var j=0;j<object_b.value.length;j++)
    {
      if(ans[i].key==object_b.value[j])
      {
        k=parseInt(ans[i].count/3)
        ans[i].count-=k;
      }
    }
  }
  return ans;
}

module.exports = create_updated_collection;
