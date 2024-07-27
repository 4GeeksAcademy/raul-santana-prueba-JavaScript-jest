// Función para convertir euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Función para convertir dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // Convertimos dólares a euros primero
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Convertimos euros a yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

// Función para convertir yenes a libras
const fromYenToPound = function(valueInYen) {
    // Convertimos yenes a euros primero
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Convertimos euros a libras
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
