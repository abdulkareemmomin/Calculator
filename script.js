let displayValue = '';

const appendToDisplay = (value) => {
    displayValue += value;
    updateDisplay();
};

const updateDisplay = () => {
    document.getElementById('display').value = displayValue;
};

const clearDisplay = () => {
    displayValue = '';
    updateDisplay();
};

const calculate = () => {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
};
