# 🚀 Access Control CP - Sistema de Autenticação com React + TypeScript

## 📝 Descrição

O **Access Control CP** é um sistema web desenvolvido com **Vite + React + TypeScript**, que implementa o fluxo básico de **cadastro e login de usuários**, utilizando o **json-server** como **banco de dados simulado**.

O sistema tem como objetivo demonstrar a integração entre **front-end e back-end simulado (mock API)**, com **validações de formulários através do React Hook Form**, **autenticação e controle de sessão via useContext e LocalStorage/SessionStorage**, além da **exibição dinâmica dos dados do usuário autenticado**.

---

## ⚙️ Funcionalidades

- Página de **Login** com validação de campos (`nomeUsuario` e `email`).
- Página de **Cadastro** com validação de campos (`nome`, `nomeUsuario` e `email`).
- Página **Home**, exibindo informações do usuário autenticado (nome e e-mail).
- Página **Error**, apresentada quando o usuário tenta acessar uma rota inexistente.
- **Mensagens de erro personalizadas** exibidas abaixo dos inputs com **React Hook Form**.
- **Prevenção de duplicidade de usuários** (verificação de `nomeUsuario` e `email` no `json-server` antes do cadastro).
- **Autenticação e controle de sessão simulados** via **useContext** e **LocalStorage/SessionStorage**.
- **Navegação entre rotas** `/login`, `/cadastro`, `/home` e `/error` configurada com **React Router DOM**.
- **Estrutura organizada e componentizada**, seguindo boas práticas de React + TypeScript.

---

## 🧩 Estrutura de Rotas

| Rota | Descrição |
|------|------------|
| `/login` | Página inicial de login, onde o usuário insere nome de usuário e e-mail. |
| `/cadastro` | Página de cadastro de novos usuários, acessível via link ou botão. |
| `/home` | Página principal após o login, exibindo dados do usuário autenticado. |
| `/error*` | Página de erro exibida ao acessar uma rota inexistente. |

---

## 💾 Endpoint (json-server)

O projeto utiliza o **json-server** para simular o banco de dados local.  
O endpoint principal é `/usuarios`, contendo os seguintes campos:

```json
{
  "funcionarios": [
    {
      "id": "0000",
      "nome": "nome",
      "rf": "1234",
      "cargo": "cargo",
      "setor": "setor",
      "cpf": "12345678900",
      "telefone": "11922456789",
      "email": "a@email.com",
      "confirmarEmail": "a@email.com",
      "senha": "123456",
      "confirmarSenha": "123456",
      "salario": "1000",
      "dataAdmissao": "2025-01-01"
    }
  ]
}
```

---

## 🛠️ Requisitos

- **Node.js** (versão 18 ou superior)  
- **npm** ou **yarn**  
- **json-server**

---

## 📦 Instalação e Execução

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seuusuario/access-control-cp.git
cd access-control-cp
```

### 2️⃣ Instalar as dependências
```bash
npm install
```

### 3️⃣ Iniciar o json-server
```bash
npm run api
```

### 4️⃣ Executar o projeto
```bash
npm run dev
```

**Acesse no navegador:**  
👉 [http://localhost:5173/login](http://localhost:5173/login)

---

## 🧠 Tecnologias Utilizadas

- ⚡ **Vite** — ambiente de desenvolvimento rápido  
- ⚛️ **React** — biblioteca para construção de interfaces  
- 🧩 **TypeScript** — tipagem estática e segurança no código  
- 📝 **React Hook Form** — gerenciamento e validação de formulários  
- 🌐 **React Router DOM** — controle de rotas  
- 💾 **json-server** — API REST simulada para persistência de dados  

---

## 🧱 Estrutura do Projeto

```
access-control-cp/
│
├── public/            
│   ├── fonts/         # Arquivos de fonte
├── src/               # Código-fonte React
│   ├── assets/        # Imagens e assets
│   ├── components/    # Componentes reutilizáveis
│   ├── context/       # Contexto de autenticação e controle de sessão
│   ├── routes/        # Páginas principais (Login, Cadastro, Home, Error)
│   ├── types/         # Definições de tipos e interfaces TypeScript
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── db.json            # Base de dados simulada
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## ⚠️ Observações

- O projeto é de **caráter acadêmico**, voltado à prática de integração **front-end com API simulada**.  
- Em uma aplicação real, o login deve utilizar **autenticação segura com tokens JWT e criptografia de senhas**.  
- O uso de **LocalStorage/SessionStorage** é apenas para **fins de simulação de sessão**.

---

## 👨‍💻 Autores

- **Felipe Ferrete** — RM562999  
- **Gustavo Bosak** — RM566315  
- **Nikolas Brisola** — RM564371 