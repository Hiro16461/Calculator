const display = document.querySelector('.display');
const numberBtns = document.querySelectorAll('.btn.number');
const clearBtn = document.querySelector('.btn.clear');
const operateBtns = document.querySelectorAll('.btn.operator');
const equalBtn = document.querySelector('.btn.equal');

let numberOne = 0;
let numberTwo = 0;
let operator = null;

const add = (num1, num2) => {
	return Number(num1) + Number(num2);
};

const subtract = (num1, num2) => {
	return Number(num1) - Number(num2);
};

const multiply = (num1, num2) => {
	return Number(num1) * Number(num2);
};

const divide = (num1, num2) => {
	return Number(num1) / Number(num2);
};

[...numberBtns].forEach((numberBtn) => {
	numberBtn.addEventListener('click', (e) => {
		console.log(numberOne, operator, numberTwo);

		if (numberOne && operator) {
			numberTwo += e.target.innerText;
			display.textContent = +numberTwo;
		} else {
			numberOne += e.target.innerText;
			display.textContent = +numberOne;
		}
	});
});

Array.from(operateBtns).forEach((operateBtn) => {
	operateBtn.addEventListener('click', (e) => {
		operator = e.target.innerText;
	});
});

equalBtn.addEventListener('click', (e) => {
	if (numberOne && operator && numberTwo) {
		switch (operator) {
			case '+':
				display.textContent = +add(numberOne, numberTwo);
				numberOne = +add(numberOne, numberTwo);
				numberTwo = 0;
				break;
			case '-':
				display.textContent = +subtract(numberOne, numberTwo);
				numberOne = +subtract(numberOne, numberTwo);
				numberTwo = 0;
				break;
			case '*':
				display.textContent = +multiply(numberOne, numberTwo);
				numberOne = +multiply(numberOne, numberTwo);
				numberTwo = 0;
				break;
			case '÷':
				display.textContent = +divide(numberOne, numberTwo);
				numberOne = +divide(numberOne, numberTwo);
				numberTwo = 0;
				break;
			default:
				break;
		}
	}
});

clearBtn.addEventListener('click', (e) => {
	numberOne = 0;
	numberTwo = 0;
	operator = null;
	display.textContent = 0;
});
