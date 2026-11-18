export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => {
    if (b === 0) return "Error: Div by 0";
    return a / b;
};

//Exponentiation (x to the power of y)
export const power = (base, exp) => Math.pow(base, exp);

//Square Root
export const squareRoot = (num) => {
    if (num < 0) return "Error: Invalid Input";
    return Math.sqrt(num);
};

// A calculation orchestrator to map operations cleanly
export const calculate = (num1, num2, operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) return n2;

    switch (operator) {
        case '+': return add(n1, n2);
        case '-': return subtract(n1, n2);
        case '*': return multiply(n1, n2);
        case '/': return divide(n1, n2);
        case '**': return power(n1, n2); // Handles exponentiation
        default: return n2;
    }
};