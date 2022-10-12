var str = "javascript"; 

function evenUppercase(str1){
len=str1.length;
var str2=[]
for(var i=0;i<len;i++){
    if(i%2==0){
        str2[i]=str1[i];
    }
    else
    str2[i]="Z";
}
 
console.log(str2.toString());
}


evenUppercase(str);