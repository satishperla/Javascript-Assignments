let str3 = "racecar";
let str4 = "Java";

function palindrome(string) {

    var len = string.length;
    var flag = 0;
    for (var i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            flag =1;
            break;
        }
    }
    if(flag==1)
    console.log("It is not a Palindrome");
    else
    console.log("It is a Palindrome");
}

palindrome(str3);
