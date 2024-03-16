let num = +prompt("Enter your chosen number:")
let sum = 0;

while (num > 0){
    sum += num %10;
    num = parseInt(num/10);
}
alert("the sum is " + sum)


const number = +prompt("Please enter your number");

let isPrime = true;

if(number == 1) {
    isPrime = false;
}
else {
    for (let i = 2; i <= number / 2; i++) { // i <= Math.sqrt(number) - more efficient.
        if(number % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if(isPrime) {
    alert("This is a prime number");
}
else {
    alert("This is not a prime number");
}