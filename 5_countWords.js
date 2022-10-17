function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    console.log(str.split(' ').length);
}

countWords("     Satish Is working in      cTS Hyderabad,  Telangana ")