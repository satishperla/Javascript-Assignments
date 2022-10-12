let str2 = "don’t know why";

function search(string){
var i=0;
var flag=0;
while(i<string.length){
  if(string[i]=="y"){
    flag=1;
    break;
  }
  i++;
}
if(flag==1)
console.log("yes");
else
console.log("no") ;
}

search('Vijayawada');