let displayValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function updateDisplay() {
  if (firstOperand || secondOperand) {
    document.getElementById('display').innerText = `${firstOperand} ${operator} ${secondOperand}`;
  } else {
    document.getElementById('display').innerText = '0';
  }
}

function appendNumber(number) {
  displayValue += number;
  if (!operator) {
    firstOperand = displayValue;
  } else {
    secondOperand = displayValue;
  }
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  displayValue = '';
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  firstOperand = '';
  secondOperand = '';
  operator = '';
  updateDisplay();
}

function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      result = 'Error';
  }
  displayValue = result.toString();
  firstOperand = displayValue;
  secondOperand = '';
  operator = '';
  updateDisplay();
}