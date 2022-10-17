function upperCase(str)
{
   regExp = /^[A-Z]/;
   if (regExp.test(str))
    {
      console.log("First character is upper case");
    } 
    else
    {
      console.log("First character is not upper case");
    }
}

upperCase("Satish");
upperCase("kumar");
upperCase("Today is holiday");