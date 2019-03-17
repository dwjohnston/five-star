export function convertCurrency(value, rate) {
    return value * rate;
}

export function formatCurrency(value) {
    return Number(value).toFixed(2);
}