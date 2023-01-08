let leftValue = 0;
let rightValue = 0;
let memoryNewNumber = false;
let mathematicalSymbol = false;
const display_out = document.getElementById('display_out');
const parent = document.getElementById('buttons');

parent.onmousedown = function(event) {

  let target = event.target;

  switch (target.innerHTML) {
    case 'x':
      memoryNewNumber = true;
      mathematicalSymbol = 'x';
      leftValue = Number(display_out.value);
      display_out.value = leftValue + ' x'
      break;
    case '/':
      memoryNewNumber = true;
      mathematicalSymbol = '/';
      leftValue = Number(display_out.value);
      display_out.value = leftValue + ' /'
      break;
    case '+':
      memoryNewNumber = true;
      mathematicalSymbol = '+';
      leftValue = Number(display_out.value);
      display_out.value = leftValue + ' +'
      break;
    case '-':
      memoryNewNumber = true;
      mathematicalSymbol = '-';
      leftValue = Number(display_out.value);
      display_out.value = leftValue + ' -'
      break;
    case 'x²':
      display_out.value = Math.pow(display_out.value, 2);
      break;
    case '.':
      if (display_out.value.includes('.') == false) {
        display_out.value += '.';
      };
      break;
    case '⌫':
      display_out.value = display_out.value.slice(0, -1);
      break;
    case 'C':
      display_out.value = '';
      leftValue = 0;
      break;
    case '=':
      if (mathematicalSymbol === 'x') {
        display_out.value = leftValue * rightValue;
      } else if (mathematicalSymbol === '/') {
        display_out.value = leftValue / rightValue;
      } else if (mathematicalSymbol === '+') {
        display_out.value = leftValue + rightValue;
      } else if (mathematicalSymbol === '-') {
        display_out.value = leftValue - rightValue;
      }
      break;
    default:
      if (memoryNewNumber) {
        display_out.value = target.innerHTML;
        memoryNewNumber = false;
        rightValue = Number(display_out.value);
      } else {
        display_out.value += target.innerHTML;
      }
  }

};