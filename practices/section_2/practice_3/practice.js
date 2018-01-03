 var getnum = function (str) {
  var ans=[];
  for(var i=0;i<str.length;i++)
  {
    if(str[i]<='9'&&str[i]>='0')
    {ans.push(str[i]);}
  }
  var num=ans[0];
  for(i=1;i<ans.length;i++)
  {num=num+ans[i];}
  return parseInt(num);
}

function count_same_elements(collection) {
  //在这里写入代码
  var ans=[];
  var i=0;
  var k='a';
  var c=0;
  var tempk,tempc;
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
        ans[i].name=k;ans[i].summary=c;
        i++;
        k=item;
        c=1;
      }
    }
    else
    {
      tempk=item.substring(0,1);
      tempc=getnum(item);
      if(tempk==k)
      {
        c+=tempc;
      }
      else
      {
        ans[i]=new Object();
        ans[i].name=k;ans[i].summary=c;
        i++;
        k=tempk;
        c=tempc;
      }

    }
  }
  ans[i]=new Object();
  ans[i].name=k;ans[i].summary=c;
  return ans;
}

module.exports = count_same_elements;
