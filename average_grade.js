var marks=[80,77,88,95,68];
var avg=0;
var total=0;
var grade;
for (var i=0;i<marks.length;i++){
    total+= marks[i];
    avg = (total/marks.length);
}

avg = (total/marks.length);

if(avg<60){
    grade ='F';
}
else if (avg<70){
    grade='D';
}
else if (avg<80){
    grade='C';
}
else if (avg<90){
    grade='B';
}
else {
    grade='A';
}

console.log("Average Marks: "+ avg);
console.log("Grade: "+ grade);


