let kaprekar = 6174;
let output = 0;

let mainDiv = createElement('div');
setAttribute(mainDiv, 'class', 'main-div');
append(mainDiv);

let bold = createElement('b');
appendChild(mainDiv, bold);

let inputLabel = createElement('div');
setAttribute(inputLabel, 'style', 'font-weight: 900');
inputLabel.innerText = 'Enter a 4 digit number  ';
appendChild(bold, inputLabel);

let inputBox = createElement('input');
setAttribute(inputBox, 'type', 'text');
setAttribute(inputBox, 'class', 'input-text');
setAttribute(inputBox, 'placeholder', 'Your input goes here');
setAttribute(inputBox, 'id', 'user-input');
appendChild(mainDiv, inputBox);

let button = createElement('input');
setAttribute(button, 'type', 'submit');
setAttribute(button, 'class', 'btn');
setAttribute(button, 'id', 'button');
setAttribute(button, 'onclick', 'check()');
setAttribute(button, 'value', 'Check');
appendChild(mainDiv, button);

let errorMsg = createElement('div');
setAttribute(errorMsg, 'class', 'error');
appendChild(mainDiv, errorMsg);

let expressionContent = createElement('div');
appendChild(mainDiv, expressionContent);

function checkDigits(ele) {
  return isNaN(ele);
}

function check() {
  expressionContent.innerText = '';
  let value = document.getElementById('user-input').value;
  generate(value);
}

function generate(input) {
  if (
    input.length !== 4 ||
    input
      .split('')
      .map((a) => +a)
      .some(checkDigits) === true
  ) {
    errorMsg.innerText = 'Input should contain 4 digits!';
  } else {
    errorMsg.innerText = '';
    let max = input
      .split('')
      .map((a) => +a)
      .sort(function (a, b) {
        return b - a;
      })
      .join('');

    let min = input
      .split('')
      .map((a) => +a)
      .sort(function (a, b) {
        return a - b;
      })
      .join('');

    let diff = max - min;
    let expressions = createElement('div');
    expressions.innerText = `${max} - ${min} = ${diff}`;
    appendChild(expressionContent, expressions);

    if (diff !== kaprekar) {
      if (diff.toString().length !== kaprekar.toString().length) {
        errorMsg.innerText = 'This cannot generate a Kaprekar number.';
      } else {
        generate(diff.toString());
      }
    } else {
      output = diff;
    }
  }
}
