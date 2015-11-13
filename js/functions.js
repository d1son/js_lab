var firstValue = prompt("Input a number or a word");

firstValue = parseInt(firstValue);

if(isNaN(firstValue)) {
	console.log ("This is a String!")
} else {
	console.log ("This is a Number!")
}

var number1 = prompt("Input a number");
var number2 = prompt("Input a number");

number1 = (parseInt(number1));
number2 = (parseInt(number2));

if(number1 > number2) {
	console.log (number1 + " is grater!")
} else {
	console.log (number2 + " is greater!")
}