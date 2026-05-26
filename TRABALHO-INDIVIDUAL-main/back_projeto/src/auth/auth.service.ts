import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { randomUUID, createHash } from 'crypto';

@Injectable()
export class AuthService {
  constructor(private readonly usuariosService: UsuariosService) {}

  async validateUser(loginAuthDto: LoginAuthDto): Promise<Usuario | null> {
    const user = await this.usuariosService.findByUsername(loginAuthDto.usuario);
    if (!user) {
      return null;
    }

    const passwordMatches = await bcrypt.compare(loginAuthDto.senha, user.senha);
    if (!passwordMatches) {
      return null;
    }

    return user;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.validateUser(loginAuthDto);
    if (!user) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    const token = this.generateBase64Token(user);
    return {
      usuario: user.usuario,
      email: user.email,
      tipo: user.tipo,
      token,
    };
  }

  generateBase64Token(user: Usuario) {
    const payload = `${user.id}:${user.usuario}:${randomUUID()}:${Date.now()}`;
    return createHash('sha256').update(payload).digest('base64');
  }
}
