let currentInput = ''; 
let ans = ''; 

function Button (value) {
    
    if (ans && currentInput === ans) {
        updateDisplay(ans + value);
        return;
    }

    if (value === '=') {
        if (currentInput !== '') {
            calculate();
        }
        return;
    }
   
    updateDisplay(currentInput + value);
}

function updateDisplay(value) {
    if (value === '') {
        document.getElementById('display').value = '0'; // It would set display to '0' if it's blank
    } else {
        document.getElementById('display').value = value;
    }
    currentInput = value; 
}

function clearEntry() {
    updateDisplay('');
}

function backspace() {
    updateDisplay(currentInput.slice(0, -1)); // Will remove the last number from current input
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    
    // If 'ans' is present in the input, replace it with the previous result
    // it's not working T-T
    displayValue = displayValue.replace('ans', ans);

    
    if (!isValidInput(displayValue)) {
        clearEntry();
        alert('Invalid input');
        return;
    }
    
    try {
        var result = eval(displayValue); 
        if (!isFinite(result)) {
            throw new Error('Invalid expression');
        }
        updateDisplay(result);
        ans = result; 
    } catch (error) {
        clearEntry();
        alert('Error: ' + error.message);
    }
}


function isValidInput(input) {
    
    if (/[\+\-\*\/]{2,}/.test(input)) {
        return false;
    }

    if (/[0-9]+\.[0-9]+\./.test(input)) {
        return false;
    }

    if (/^[\+\-\*\/]/.test(input)) {
        return false;
    }
    return true;
}
