function somaMultiplos5e7() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

const resultado = somaMultiplos5e7();
console.log("A soma dos múltiplos de 5 ou 7 abaixo de 1000 é:", resultado);
