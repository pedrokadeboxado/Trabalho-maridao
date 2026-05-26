# Backend - TypeORM + PostgreSQL Setup

## ✅ Implementado com Sucesso

### 📦 Dependências Instaladas
- `@nestjs/typeorm` - Integração TypeORM com NestJS
- `typeorm` - ORM para Node.js
- `pg` - Driver PostgreSQL
- `dotenv` - Gerenciamento de variáveis de ambiente

### 📁 Estrutura Criada

```
src/usuarios/
├── entities/
│   └── usuario.entity.ts      # Entidade com campos: id, nome, email, usuario, senha, tipo, ativo, dataCriacao, dataAtualizacao
├── dto/
│   ├── create-usuario.dto.ts  # DTO para criação
│   └── update-usuario.dto.ts  # DTO para atualização
├── usuarios.module.ts          # Módulo configurado com TypeOrmModule
├── usuarios.service.ts         # Serviço com CRUD completo
├── usuarios.controller.ts      # Controller com endpoints REST
└── index.ts                    # Arquivo de exportação
```

### 🗄️ Banco de Dados

**Configuração:**
- Host: `localhost`
- Porta: `5432`
- Usuário: `postgres`
- Senha: `postgres`
- Database: `maridao`

**Tabela `usuarios` criada automaticamente com campos:**
- `id` (UUID, PK)
- `nome` (VARCHAR 255)
- `email` (VARCHAR 255, UNIQUE)
- `usuario` (VARCHAR 100, UNIQUE)
- `senha` (VARCHAR 255)
- `tipo` (VARCHAR 50, DEFAULT: 'usuario')
- `ativo` (BOOLEAN, DEFAULT: true)
- `dataCriacao` (TIMESTAMP, AUTO)
- `dataAtualizacao` (TIMESTAMP, AUTO)

### 🔄 Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/usuarios` | Criar novo usuário |
| GET | `/usuarios` | Listar todos os usuários |
| GET | `/usuarios/:id` | Buscar usuário por ID |
| GET | `/usuarios/username/:usuario` | Buscar usuário por username |
| PATCH | `/usuarios/:id` | Atualizar usuário |
| DELETE | `/usuarios/:id` | Deletar usuário |
| POST | `/usuarios/validate` | Validar credenciais |

### 🐳 Docker Compose

Arquivo `docker-compose.yml` criado com:
- **PostgreSQL 16** - Banco de dados
- **PgAdmin 4** - Interface web para gerenciar PostgreSQL
  - URL: http://localhost:5050
  - Email: admin@admin.com
  - Senha: admin

### 🚀 Como Usar

**1. Iniciar o PostgreSQL (opcional - use se tiver Docker):**
```bash
docker-compose up -d
```

**2. O Backend já está rodando:**
```
Aplicação rodando na porta 3000
```

**3. Testar a API:**

**Criar usuário:**
```bash
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@example.com",
    "usuario": "joao_silva",
    "senha": "senha123",
    "tipo": "usuario"
  }'
```

**Listar usuários:**
```bash
curl http://localhost:3000/usuarios
```

**Validar credenciais:**
```bash
curl -X POST http://localhost:3000/usuarios/validate \
  -H "Content-Type: application/json" \
  -d '{
    "usuario": "joao_silva",
    "senha": "senha123"
  }'
```

### 📝 Variáveis de Ambiente (.env)

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=maridao
NODE_ENV=development
PORT=3000
```

### ✨ Features

- ✅ Sincronização automática de schema (synchronize: true)
- ✅ Logging habilitado para queries SQL
- ✅ CORS habilitado
- ✅ UUID como chave primária
- ✅ Timestamps automáticos (criação e atualização)
- ✅ Validação de unicidade para email e usuario
- ✅ Hot reload em desenvolvimento

---

**Status:** ✅ Configurado e rodando com sucesso!
