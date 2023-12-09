let displayValue = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function setOperator(newOperator) {
    if (operator !== '' && firstOperand !== null) {
        calculateResult();
    }
    operator = newOperator;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    if (operator === '' || firstOperand === null) {
        return;
    }
    const secondOperand = parseFloat(displayValue);
    switch (operator) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            if (secondOperand !== 0) {
                displayValue = (firstOperand / secondOperand).toString();
            } else {
                displayValue = 'Error';
            }
            break;
        default:
            break;
    }
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}
