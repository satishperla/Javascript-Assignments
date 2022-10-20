const message = document.getElementById("error");
function calculate() {

    message.innerHTML = "";

    var num1 = document.getElementById('input1').value;

    var num2 = document.getElementById('input2').value;
    var operators = document.getElementsByName("arithmetic");

    length = operators.length;
    while (length--) {
        if (operators[length].checked) {
            operation = operators[length].value;
            break;
        }
    }

    try {
        if (num1 == "" || num2 == "") throw "Empty";
        else if (isNaN(num1) || isNaN(num2)) throw "Not a number";
        else if (num2 == 0 && operation == "div") throw "Indivisible by zero";
        else if (num1 > 1000000000 || num2 > 1000000000) throw "Out of Range";
    }
    catch (err) {

        message.innerHTML = "Input is  " + err;
    }
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);

    switch (operation) {

        case 'add': return document.getElementById('result').innerHTML = num1 + num2;
            break;
        case 'sub': return document.getElementById('result').innerHTML = num1 - num2;
            break;
        case 'mul': return document.getElementById('result').innerHTML = num1 * num2;
            break;
        case 'div': return document.getElementById('result').innerHTML = num1 / num2;
            break;
    }



}
