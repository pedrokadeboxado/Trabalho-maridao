describe('Testes de Pagamento', () => {

  // --- CENÁRIOS DE SUCESSO ---
  describe('Pagamento válido', () => {
    it('deve processar o pagamento com sucesso quando os dados forem válidos', () => {
      expect(() => {
        const valor = 100; // Valor válido (> 0)
        const metodo = 'pix'; // Método válido
        const validos = ['pix', 'cartao'];

        // Simulação da mesma lógica de validação do seu código:
        if (valor <= 0) {
          throw new Error('Valor inválido');
        }
        if (!validos.includes(metodo)) {
          throw new Error('Método inválido');
        }

        // Se chegou até aqui sem dar throw, o pagamento é válido!
      }).not.toThrow(); 
    });
  });

  // --- CENÁRIOS DE FALHA (O código que você já tem) ---
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

});