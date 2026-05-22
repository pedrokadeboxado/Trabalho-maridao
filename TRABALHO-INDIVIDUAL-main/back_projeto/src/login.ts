export function login(usuario: string, senha: string): string {
  const usuarioCorreto = 'admin';
  const senhaCorreta = '123456';

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    return 'Login aprovado';
  }

  throw new Error('Credenciais inválidas');
}