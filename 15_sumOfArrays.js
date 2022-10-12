let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let arr_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function sumOfArrays(arr1, arr2) {
    var sum = 0;
    for (i = 0; i < arr1.length; i++) {
        sum += arr1[i] + arr2[i];
    }

    console.log(sum);
}

sumOfArrays(arr_3, arr_2)
