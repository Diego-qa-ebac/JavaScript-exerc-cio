function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const numero1 = 100;
const numero2 = 60;
const mdc = calcularMDC(numero1, numero2);
console.log("O MDC entre", numero1, "e", numero2, "é", mdc);
