export const formatDisplay = (value) => {
    if (value === "Error: Div by 0") return value;

    const num = parseFloat(value);
    if (isNaN(num)) return "0";

    // If the number is a decimal, cap it at 4 spaces for the UI grid
    if (num % 1 !== 0) {
        return Number(num.toFixed(4)).toString();
    }

    return num.toString();
};