const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para la función fromEuroToDollar
test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

// Prueba para la función fromDollarToYen
test("Conversion from USD to JPY (1 USD = 149.03 JPY)", () => {
    expect(fromDollarToYen(10)).toBeCloseTo(1462.6168224299065, 10);
});

// Prueba para la función fromYenToPound
test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.559006211180124, 10);
});
