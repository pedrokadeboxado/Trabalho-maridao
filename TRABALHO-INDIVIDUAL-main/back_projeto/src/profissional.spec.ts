import { cadastrarProfissional } from './profissional';

describe('Cadastro de profissional', () => {

  // ✅ TESTE VÁLIDO
  it('deve cadastrar profissional com dados válidos', () => {
    const result = cadastrarProfissional('João Silva', 25, 'Dev');

    expect(result).toEqual({
      nome: 'João Silva',
      idade: 25,
      profissao: 'Dev',
      status: 'ativo',
    });
  });

  // ❌ TESTES INVÁLIDOS
  it('deve falhar com nome inválido', () => {
    expect(() => cadastrarProfissional('A', 25, 'Dev'))
      .toThrow('Nome inválido');
  });

  it('deve falhar com idade inválida', () => {
    expect(() => cadastrarProfissional('João', 16, 'Dev'))
      .toThrow('Idade inválida');
  });

  it('deve falhar com profissão inválida', () => {
    expect(() => cadastrarProfissional('João', 25, ''))
      .toThrow('Profissão inválida');
  });

});