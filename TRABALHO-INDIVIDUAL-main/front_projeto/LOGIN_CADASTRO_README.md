# Tela de Login/Cadastro - MARIDÃO DE ALUGUEL

## 📋 Descrição

Foi implementada uma tela completa de **Login e Cadastro** com design moderno e responsivo para a aplicação MARIDÃO DE ALUGUEL.

## ✨ Funcionalidades

### 🔐 Login
- Campo de usuário e senha
- Validação de credenciais
- Feedback visual de sucesso/erro
- Credenciais de demo: `admin` / `123456`

### 📝 Cadastro
- Campo de nome completo
- Campo de email com validação
- Criação de usuário
- Confirmação de senha
- Validações:
  - Campos obrigatórios
  - Senhas devem corresponder
  - Senha mínima de 6 caracteres
  - Email válido

### 🎨 Design
- Interface moderna com gradiente roxo
- Animações suaves
- Totalmente responsivo
- Tema escuro elegante
- Transições fluidas
- Abas para alternar entre Login e Cadastro

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   └── Auth.tsx           # Componente de autenticação (login/cadastro)
├── styles/
│   └── Auth.css           # Estilos da tela de autenticação
├── App.tsx                # Componente principal (modificado)
└── App.css                # Estilos do app (modificado)
```

## 🚀 Como Usar

### 1. Iniciar a Aplicação
```bash
npm install
npm run dev
```

### 2. Login
- Insira o usuário: `admin`
- Insira a senha: `123456`
- Clique em "Entrar"

### 3. Cadastro (Demo)
- Preencha os dados de cadastro
- Confirme a senha
- Clique em "Cadastrar"
- Após sucesso, você será redirecionado para login

### 4. Logout
- Clique no botão "Sair" no canto superior direito
- Você retornará à tela de autenticação

## 🎯 Componentes

### Auth.tsx
Componente responsável por gerenciar:
- Estados de login e cadastro
- Validações de formulário
- Alternância entre abas
- Feedback ao usuário (erros e sucesso)

### App.tsx
Modificado para:
- Verificar autenticação antes de renderizar conteúdo
- Exibir informações do usuário autenticado
- Oferecer opção de logout
- Limpar dados ao fazer logout

## 🎨 Cores e Tema

| Elemento | Cor |
|----------|-----|
| Gradient Principal | #667eea → #764ba2 |
| Fundo | Branco/Cinza claro |
| Texto Primário | #333 |
| Erro | #c33 |
| Sucesso | #3c3 |

## 📱 Responsividade

- ✅ Desktop (> 1200px)
- ✅ Tablet (600px - 1200px)
- ✅ Mobile (< 600px)

## 🔄 Fluxo de Autenticação

```
1. Usuário acessa a aplicação
   ↓
2. Se não autenticado → Mostra Auth.tsx
   ↓
3. Usuário faz login OU cadastro
   ↓
4. Se sucesso → Renderiza App.tsx com dados do usuário
   ↓
5. Clique em "Sair" → Retorna para Auth.tsx
```

## 🔑 Credenciais de Teste

**Login:**
- Usuário: `admin`
- Senha: `123456`

**Cadastro:** Pode-se criar novas contas (demo apenas - não persiste entre atualizações)

## 💡 Observações

- A autenticação é simulada (não usa backend ainda)
- Os dados de cadastro não são persistidos
- Integração com backend pode ser feita substituindo as lógicas de autenticação
- Os dados de sessão são perdidos ao fazer F5 (sem persistência em localStorage)

## 🎓 Próximas Melhorias Possíveis

- [ ] Integração com autenticação JWT
- [ ] Persistência de sessão (localStorage/sessionStorage)
- [ ] Recuperação de senha
- [ ] Autenticação com redes sociais
- [ ] Two-Factor Authentication (2FA)
- [ ] Validações mais robustas
- [ ] Integração com backend NestJS

---

**Status:** ✅ Implementado e testado
