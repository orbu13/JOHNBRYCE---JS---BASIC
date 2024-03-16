const num1 = +prompt("enter num1");
const num2 = +prompt("enter num2");

const sign = prompt("enter your sign");

switch(sign){
    case "+":
        alert("the user enter the numbers " + num1 + "+" + num2 + " and the sign + so the result is" + num1 + num2);
        break;
    case "-":
        alert("the user enter the numbers " + num1 + "+" + num2 + " and the sign - so the result is" + num1 - num2);
        break;
    case "/":
        alert("the user enter the numbers " + num1 + "+" + num2 + " and the sign / so the result is" + num1 / num2);
        break;
    case "*":
        alert("the user enter the numbers " + num1+  "+" + num2 + " and the sign * so the result is" + num1 * num2);
}