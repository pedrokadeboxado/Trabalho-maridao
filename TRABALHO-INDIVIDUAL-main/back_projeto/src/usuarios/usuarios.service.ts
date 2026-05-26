import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const emailExists = await this.findByEmail(createUsuarioDto.email);
    if (emailExists) {
      throw new ConflictException('Email já cadastrado');
    }

    const usernameExists = await this.findByUsername(createUsuarioDto.usuario);
    if (usernameExists) {
      throw new ConflictException('Usuário já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, 10);
    const usuario = this.usuariosRepository.create({
      ...createUsuarioDto,
      senha: hashedPassword,
    });
    return await this.usuariosRepository.save(usuario);
  }

  async findAll() {
    return await this.usuariosRepository.find();
  }

  async findOne(id: string) {
    return await this.usuariosRepository.findOne({ where: { id } });
  }

  async findByUsername(usuario: string) {
    return await this.usuariosRepository.findOne({ where: { usuario } });
  }

  async findByEmail(email: string) {
    return await this.usuariosRepository.findOne({ where: { email } });
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuariosRepository.update(id, updateUsuarioDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    const usuario = await this.findOne(id);
    if (usuario) {
      await this.usuariosRepository.remove(usuario);
      return { mensagem: 'Usuário removido com sucesso' };
    }
    return { mensagem: 'Usuário não encontrado' };
  }

  async validateCredentials(usuario: string, senha: string) {
    const user = await this.findByUsername(usuario);
    if (!user) {
      return null;
    }
    const passwordMatches = await bcrypt.compare(senha, user.senha);
    if (passwordMatches) {
      return user;
    }
    return null;
  }
}
