
let display = document.getElementById('display');
let container = document.getElementById('buttons-container');

const buttonLabels = [
  'C', '7', '8', '9', '/', 
  '4', '5', '6', '*', 
  '1', '2', '3', '-', 
  '0', '.', '=', '+'
];

// ✅ Use a for loop to create buttons
for (let i = 0; i < buttonLabels.length; i++) {
  const label = buttonLabels[i];
  const button = document.createElement('button');
  button.textContent = label;
  button.onclick = function () {
    handleButtonClick(label);
  };
  container.appendChild(button);
}

function handleButtonClick(label) {
  if (label === 'C') {
    clearDisplay();
  } else if (label === '=') {
    calculate();
  } else {
    appendValue(label);
  }
}

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    if (display.value.includes('/0')) {
      alert("Error: Division by zero is not allowed.");
      return;
    }
    display.value = eval(display.value);
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}
