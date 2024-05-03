const displayCurrent = document.querySelector('#current-operand');
const displayPrevious = document.querySelector('#previous-operand');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const dotButton = document.querySelector('.dot');

let currentOperand = '';
let previousOperand = '';
let operation = null;

numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		appendNumber(button.innerText);
		updateDisplay();
	});
});

operationButtons.forEach((button) => {
	button.addEventListener('click', () => {
		chooseOperation(button.innerText);
		updateDisplay();
	});
});

clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', compute);
dotButton.addEventListener('click', appendDot);

function appendNumber(number) {
	if (number === '.' && currentOperand.includes('.')) return;
	currentOperand = currentOperand.toString() + number.toString();
}

function updateDisplay() {
	document.querySelector('#current-operand').innerText = currentOperand;
	document.querySelector('#previous-operand').innerText =
		previousOperand + ' ' + (operation || '');
}

function chooseOperation(selectedOperation) {
	if (currentOperand === '') return;
	if (previousOperand !== '') {
		compute();
	}
	operation = selectedOperation;
	previousOperand = currentOperand;
	currentOperand = '';
}

function compute() {
	let computation;
	const prev = parseFloat(previousOperand);
	const current = parseFloat(currentOperand);
	if (isNaN(prev) || isNaN(current)) return;

	switch (operation) {
		case '+':
			computation = prev + current;
			break;
		case '-':
			computation = prev - current;
			break;
		case '*':
			computation = prev * current;
			break;
		case '/':
			computation = prev / current;
			break;
		default:
			return;
	}

	currentOperand = computation;
	operation = undefined;
	previousOperand = '';
	updateDisplay();
}

function clear() {
	currentOperand = '';
	previousOperand = '';
	operation = null;
	updateDisplay();
}

function appendDot() {
	if (currentOperand.includes('.')) return;
	if (currentOperand === '') currentOperand = '0';
	currentOperand += "."
	updateDisplay();
}
