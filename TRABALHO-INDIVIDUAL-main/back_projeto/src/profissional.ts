export function cadastrarProfissional(nome: string, idade: number, profissao: string) {
  if (!nome || nome.length < 3) {
    throw new Error('Nome inválido');
  }

  if (idade < 18) {
    throw new Error('Idade inválida');
  }

  if (!profissao) {
    throw new Error('Profissão inválida');
  }

  return {
    nome,
    idade,
    profissao,
    status: 'ativo',
  };
}
