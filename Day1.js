function calculateFactorial() {
    const numberInput = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');
    const outputElement = document.getElementById('output');
    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
        resultElement.textContent = 'Please enter a non-negative integer.';
        outputElement.textContent = '';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    resultElement.textContent = `The factorial of ${number} is:`;
    outputElement.textContent = factorial;
}