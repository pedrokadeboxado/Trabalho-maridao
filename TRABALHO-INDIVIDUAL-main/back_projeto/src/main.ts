import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Usuários')
    .setDescription('Documentação da API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3000;

  await app.listen(port);

  console.log(`Aplicação rodando na porta ${port}`);
  console.log(`Swagger disponível em: http://localhost:${port}/swagger`);
}

bootstrap();