//переменные для операций
var MemoryCurrentNumber = 0;      //Значение введённого операнда
var MemoryNewNumber = false;      //введён первый операнд
var MemoryPendingOperation = '';  //какой оператор нажат


//Обработка нажатия цифровых кнопок
function digitBtnPress(digit) {
  if (MemoryNewNumber) {
    display.value = digit;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = digit;
    } else {
      display.value += digit;
    }
  }
}

//Обработка нажатия кнопок операций
function operationBtnPress(operator) {
  let localOperationMemory = display.value;

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    //display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true; //Можно вводить второй операнд
    switch (MemoryPendingOperation) {
      case '+': 
        MemoryCurrentNumber += +localOperationMemory;
        break;
      case '-': 
        MemoryCurrentNumber -= +localOperationMemory;
        break;
      case '*': 
        MemoryCurrentNumber *= +localOperationMemory;
        break;
      case '/': 
        MemoryCurrentNumber /= +localOperationMemory;
        break;
      case 'pow':
        MemoryCurrentNumber = MemoryCurrentNumber**localOperationMemory;
        break;
      default:
        MemoryCurrentNumber = +localOperationMemory;
        break;
    }
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = operator;
  }
}

//Обработка нажатия кнопок CE/C
function clearBtnPress(id) {
  if (id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
}

//Обработка нажатия кнопки "точка"
function decimalBtnPress() {
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
}

//Квадратный корень
function evalSquare () {
  let localOperationMemory = display.value;
  if ( localOperationMemory < 0 ) {
    display.value = 'error';
    return;
  }
  if ( MemoryPendingOperation === '' || MemoryPendingOperation === '=' ) {
    display.value = Math.sqrt(localOperationMemory);
  }
  
}