describe('Pagamento inválido', () => {
  it('deve lançar erro para valor inválido', () => {
    expect(() => {
      const valor = 0;

      if (valor <= 0) {
        throw new Error('Valor inválido');
      }
    }).toThrow('Valor inválido');
  });

  it('deve lançar erro para método inválido', () => {
    expect(() => {
      const metodo = 'bitcoin';
      const validos = ['pix', 'cartao'];

      if (!validos.includes(metodo)) {
        throw new Error('Método inválido');
      }
    }).toThrow('Método inválido');
  });
});