function calcularMDC(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  describe('Função calcularMDC', () => {
    it('Deve retornar o MDC (Máximo Divisor Comum) correto', () => {
      const resultado1 = calcularMDC(100, 60);
      expect(resultado1).toBe(20); 
  
      const resultado2 = calcularMDC(21, 14);
      expect(resultado2).toBe(7); 
    });
  });
  
  
  const numero1 = 100;
  const numero2 = 60;
  const mdc = calcularMDC(numero1, numero2);
  console.log("O MDC entre", numero1, "e", numero2, "é", mdc);
  