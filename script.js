//when ever a number is pushed store it into the first and second variable. when the equals is pressed it stores that number into
// variable number 1 again and then leaves variable number 2 open again. 
// when an operator button is pushed it uses the stored variables and runs them through the operator functions 



firstInput = ``
secondInput = ``

function add () {

}

function subtract () {

}

function multiply () {

}

function divide () {

}


// calls above functions
function operate () {

}

// Clears the entire board
const clearButton = document.querySelector('#clearbtn')
    clearButton.addEventListener('click', () => {
        output.textContent = '';
    });


const numPadButtons = document.querySelectorAll('.numbtn');
const display = document.querySelector('#output');
numPadButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    output.textContent += number;
    console.log (number)
  });
});

