function emailValidate(str) {
  regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regExp.test(str)) {
    console.log("Valid Email Address");
  }
  else {
    console.log("Invalid Email Address");
  }
}

emailValidate('abc.231@gmail.com');
emailValidate('abc.-21@gmail.edu');
