
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

// addition
var add = function(number1, number2) {
  return number1 + number2;
};
var resultAdd = add(number1, number2);
alert("Sum: " + resultAdd);

// subtract
var subtract = function(number1, number2) {
  return number1 - number2;
};
var resultSubtract = subtract(number1, number2);
alert("Difference: " + resultSubtract);

// multiply
var multiply = function(number1, number2) {
  return number1 * number2;
};
var resultMultiply = multiply(number1, number2);
alert("Product: " + resultMultiply);

// divide
var divide = function(number1, number2) {
  return number1 / number2;
};

var resultDivide = divide(number1, number2);
alert("Quotient: " + resultDivide);
