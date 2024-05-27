const { somaMultiplos5e7 } = require('./multiplosFuncoes');

describe('Função somaMultiplos 5 e 7', () => {

  it('Deve retornar a soma correta dos múltiplos de 5 e 7 abaixo de 1000', () => {
    const resultado = somaMultiplos5e7();
    expect(resultado).toBe(214216); 
  });

  it('Deve retornar 0 se o limite for menor que 1', () => {
    const resultado = somaMultiplos5e7(0);
    expect(resultado).toBe(0);
  });
});
