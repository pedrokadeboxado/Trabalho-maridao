export class CreateUsuarioDto {
  nome: string;
  email: string;
  usuario: string;
  senha: string;
  tipo?: string;
  ativo?: boolean;
}
