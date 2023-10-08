// let numberTotal = 0;
// let buffer = "0";
// let pastOperator;

// const display = document.querySelector('.display_result');

// function buttonClick(value) {
//     if (isNaN(value)) {
//         symbol(value);
//     } else {
//         number(value);
//     }
//     display.innerText = buffer;
// }

// function symbol(sign) {
//     switch (sign) {
//         case 'AС':
//             buffer = '0';
//             numberTotal = 0;
//             break;
//         case '=':
//             if (pastOperator === null) {
//                 return
//             }
//             resetOperator(parseInt(buffer));
//             pastOperator = null;
//             buffer = numberTotal;
//             numberTotal = 0;
//             break;
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//             math(sign);
//             break;
//     }
// }

// function math(sign) {
//     if (buffer === '0') {
//         return;
//     }

//     const initalBuffer = parseInt(buffer);

//     if (numberTotal === 0) {
//         numberTotal = initalBuffer;
//     } else {
//         resetOperator(initalBuffer)
//     }
//     pastOperator = sign;
//     buffer = '0';
// }

// function resetOperator(initalBuffer) {
//     if (pastOperator === '+') {
//         numberTotal += initalBuffer;
//     } else if (pastOperator === '-') {
//         numberTotal -= initalBuffer;
//     } else if (pastOperator === '*') {
//         numberTotal *= initalBuffer;
//     } else if (pastOperator === '/') {
//         // if (numberTotal === 0) {
//         //     display.textContent = "Ошибка"
//         // } else 
//             numberTotal /= initalBuffer;
//     }
// }

// function number(numberString) {
//     if (buffer === '0') {
//         buffer = numberString
//     } else {
//         buffer += numberString
//     }
// }

// function inital() {
//     document.querySelector('.button-menu').addEventListener('click', function (evt) {
//         buttonClick(evt.target.innerText);
//     })
// }

// inital();

let x = ''; // first number
let y = ''; // secont number
let sign = ''; // sign operation
let finish = false;
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let operator = ['+', '-', '/', '*'];
const displayResult = document.querySelector('.display_result')
const clearAll = () => {
    x = '';
    y = '';
    sign = '';
    finish = false;
    displayResult.textContent = 0;
}

const buttonMenu = document.querySelector('.button-menu');
const clearAllButton = buttonMenu.querySelector('.clear');

buttonMenu.addEventListener('click', (evt) => {
    // if(!evt.target.classList.contains('.button-menu__button')) return;
    if (evt.target.classList.contains('.clear')) return;

    displayResult.textContent = '';

    const key = evt.target.textContent;

    if (digits.includes(key)) {
        if (y === '' && operator === '') {
            x += key;
            displayResult.textContent = x;
        }

        else if (x !== '' && y !== '' && finish) {

        }
        else {
            y += key;
            displayResult.textContent = y;
        }
        return
    }

    if (operator.includes(key)) {
        sign = key;
        displayResult.textContent = sign;
        return
    }
})

clearAllButton.addEventListener('click', clearAll);