let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
var arr2=[];
var len=arr.length
for(var i=0;i<len;i++){
  arr2[i]=arr[len-1-i];
}
console.log(arr2);

//using in built function
var arr3= arr.reverse()
console.log(arr3);