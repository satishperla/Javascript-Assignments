
function phoneNumberValidate(number){
    regExp = /^[7-9][0-9]{9}$/;
    if (regExp.test(number))
     {
       console.log("Valid Phone Number");
     } 
     else
     {
       console.log("Invalid Phone Number");
     }
 }

 phoneNumberValidate(1234567890);
 phoneNumberValidate(7891234767);
 phoneNumberValidate('7891234767Satish');
