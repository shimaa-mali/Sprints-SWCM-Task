function startCalculator() {
  let repeat = true;

  while (repeat) {
    let num1 = parseFloat(prompt("Enter first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter second number:"));
    let result;

    if (isNaN(num1) || isNaN(num2)) {
      alert(" Invalid number input.");
    } else if (operator === '/' && num2 === 0) {
      alert(" Cannot divide by zero.");
    } else if (operator === '+') {
      result = num1 + num2;
      alert(`${num1} + ${num2} = ${result}`);
    } else if (operator === '-') {
      result = num1 - num2;
      alert(`${num1} - ${num2} = ${result}`);
    } else if (operator === '*') {
      result = num1 * num2;
      alert(`${num1} * ${num2} = ${result}`);
    } else if (operator === '/') {
      result = num1 / num2;
      alert(`${num1} / ${num2} = ${result}`);
    } else {
      alert(" Invalid operator.");
    }

    let again = prompt("Do you want to calculate again? (yes/no)").toLowerCase();
    if (again !== 'yes') {
      repeat = false;
      alert("Finish!");
    }
  }
}