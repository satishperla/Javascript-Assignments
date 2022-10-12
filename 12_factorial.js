
function calculateFactorial(number){
var factorial=1;
for(var i=1;i<=number;i++){
    factorial*= i;
}
console.log(factorial);
}

calculateFactorial(6);