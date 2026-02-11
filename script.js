const display = document.querySelector('#output');
let num1 = ``
let num2 = ``
let result = ""
let operator = ``
let isCalculated = false

function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2
}

function multiply (num1, num2) {
  return num1 * num2
}

function divide (num1, num2) {
  if (num2 === 0) {
    return "ERROR"
  } else {
   return num1 / num2
  }
}

function calculate() {
    if (operator === "+") {
    result = add(Number(num1), Number(num2));
  } else if (operator === "-") {
    result = subtract(Number(num1), Number(num2));
  } else if (operator === "x") {
    result = multiply(Number(num1),Number(num2));
  } else if (operator === '÷') {
    result = divide(Number(num1), Number(num2));
  }
  num1 = result
display.textContent = result
  
}


const numPadButtons = document.querySelectorAll('.numbtn');
numPadButtons.forEach(button =>{
button.addEventListener('click', (e) => {
  isCalculated = false;
  if (!operator) {
  num1 += e.target.textContent
  display.textContent = num1
  } else {
    num2 += e.target.textContent
  display.textContent = num2
  }
  console.log(num1)
  })
});

const equalsButton = document.querySelector('#equalsbtn');
  equalsButton.addEventListener('click', () => {
    calculate()
    isCalculated = true;
});


const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
if (operator && num1 && num2 && !isCalculated) {
  calculate()
}
  isCalculated = false;  
  num2 = ''
    if (button.textContent === "+"){
      operator = "+"
    } else if (button.textContent === '-') {
      operator = "-"
    } else if (button.textContent === '÷') {
      operator ='÷'
    } else if (button.textContent === 'x') {
      operator ='x'
    } 
    display.textContent = operator
  })
});

const clearButton = document.querySelector('#clearbtn')
function clearMemory () {
  num1 = ``
  num2 = ``
  result = ``
  operator = ``
}
function clearDisplay() {
  display.textContent = '';
}

//Clears Memory and Display
clearButton.addEventListener('click', () => {
  clearMemory()
  clearDisplay()
});


