const { menorValor, maiorValor } = require('./funcoes');

const valores = [1, 5, 7, 9, 12, 15, 29, 43, 56, 70, 99];

describe('Funções de Busca de Menor e Maior Valor', () => {

  it('Deve retornar o menor valor do array', () => {
    const menor = menorValor(valores);
    expect(menor).toBe(1);
  });

  it('Deve retornar o maior valor do array', () => {
    const maior = maiorValor(valores);
    expect(maior).toBe(99);
  });
});
