# API Test Collection - Hoppscotch

Esta pasta contém a coleção de testes de API para o projeto desenvolvido em NestJS.

## 📋 Sobre

Arquivo: `hoppscotch_collection.json`

A coleção inclui testes abrangentes para todos os endpoints da API, organizados em categorias:

### Categorias de Testes

1. **Health Check**
   - GET / - Verifica se a API está respondendo

2. **Authentication** (Login)
   - Login com credenciais válidas (admin/123456)
   - Login com credenciais inválidas
   - Login com campos vazios

3. **Professional Registration** (Cadastro de Profissionais)
   - Cadastro com dados válidos
   - Validação de nome (mínimo 3 caracteres)
   - Validação de idade (mínimo 18 anos)
   - Validação de profissão (não pode estar vazia)
   - Teste com múltiplos profissionais

4. **Payments** (Pagamentos)
   - Listar pagamentos
   - Criar novo pagamento

## 🚀 Como Usar

### Opção 1: Importar no Hoppscotch Online

1. Acesse [https://hoppscotch.io/](https://hoppscotch.io/)
2. Clique em **Collections** (Coleções)
3. Clique em **Import** (Importar)
4. Selecione o arquivo `hoppscotch_collection.json`
5. A coleção será importada e pronta para uso

### Opção 2: Usar com Postman

1. Abra o [Postman](https://www.postman.com/)
2. Clique em **Import** (Importar)
3. Selecione o arquivo `hoppscotch_collection.json`
4. A coleção será importada e pronta para uso

## 🧪 Executando os Testes

1. Certifique-se de que o servidor backend está rodando na porta 3000:
   ```bash
   npm run start:dev
   ```

2. Na ferramenta de API (Hoppscotch ou Postman):
   - Selecione um dos testes
   - Clique em **Send** (Enviar)
   - Verifique os resultados e os testes automatizados

## ✅ Testes Inclusos

Cada requisição inclui:
- **Request**: Corpo da requisição e headers apropriados
- **Tests**: Validações automáticas para:
  - Status code HTTP
  - Estrutura da resposta
  - Conteúdo esperado

## 🔧 Credenciais de Teste

- **Usuário**: `admin`
- **Senha**: `123456`

## 📊 Dados de Exemplo para Profissionais

```json
{
  "nome": "João Silva",
  "idade": 28,
  "profissao": "Desenvolvedor"
}
```

Requisitos de validação:
- Nome: mínimo 3 caracteres
- Idade: mínimo 18 anos
- Profissão: não pode estar vazia

## 🐳 Se Usar Docker

Se estiver usando Docker Compose, certifique-se de que o container do backend está rodando:

```bash
docker-compose up -d
```

## 📝 Notas

- A URL base da API está configurada como `http://localhost:3000`
- Todos os testes podem ser executados individualmente ou como uma suite completa
- Os testes incluem validações de casos de sucesso e erro

## 💡 Próximos Passos

Para adicionar mais testes:
1. Exporte a coleção atualizada do Hoppscotch/Postman
2. Substitua o arquivo `hoppscotch_collection.json`
3. Faça commit das mudanças

---

**Data de Criação**: 31 de Maio de 2026
**Versão**: 1.0
