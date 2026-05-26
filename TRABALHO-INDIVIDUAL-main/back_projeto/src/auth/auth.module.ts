import { Module } from '@nestjs/common';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [UsuariosModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {
  static setupSwagger(app) {
    const options = new DocumentBuilder()
      .setTitle('API de Autenticação')
      .setDescription('Documentação da API de autenticação')
      .setVersion('1.0')
      .addTag('auth')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}
