import { login } from './login';

describe('Login do usuário', () => {
  it('deve aceitar credenciais corretas', () => {
    const resultado = login('admin', '123456');

    expect(resultado).toBe('Login aprovado');
  });

  it('deve rejeitar credenciais inválidas', () => {
    expect(() => login('admin', 'errado'))
      .toThrow('Credenciais inválidas');
  });
});