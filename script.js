let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}
