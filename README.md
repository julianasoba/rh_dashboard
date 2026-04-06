# 📊 Dashboard de Recursos Humanos

### 📌 Sobre o Projeto

Dashboard de Recursos Humanos desenvolvido para **uso interno em empresas**, com o objetivo de centralizar, organizar e automatizar os principais processos de gestão de colaboradores.

A aplicação visa reduzir processos manuais, melhorar a transparência entre RH, liderança e colaboradores e facilitar a tomada de decisão através de dados consolidados (KPIs), controlo de acessos e fluxos de aprovação bem definidos.

Este projeto foi desenvolvido com foco em boas práticas de Front-End, organização de código e experiência do utilizador.
Dashboard interno para gestão de colaboradores, faltas, férias e escalas de trabalho.
Pensado para pequenas e médias empresas, com foco em clareza, controle e boa UX para gestores e RH.


<br/>

## 🧠 Principais Conceitos Aplicados
- Componentização e reutilização de UI
- Gerenciamento de estado e fluxo de dados
- Separação de responsabilidades
- Navegação orientada a dados
- Regras de negócio reais

<br/>

## 🚀 Funcionalidades
| ✅ Implementadas | 🚧 Em desenvolvimento | 
| :--- | :---: | 
| - Estrutura base do dashboard| - Gestão de turnos (geração e edição manual) |
|- Navegação dinâmica por sidebar | - Solicitação de férias e justificativos com fluxo de aprovação | 
| - Layout responsivo| - Visualização de pagamentos, descontos e benefícios |
|- Páginas de overview, colaboradores, aprovações e relatórios (UI) |- Sistema de auditoria/logs de ações | 
| - Estrutura base do dashboard| - Gestão de turnos (geração e edição manual) |
|- Navegação dinâmica por sidebar | Autenticação e controlo de acessos por perfil (RBAC)| 



<br/>

## 🛠️ Tecnologias Utilizadas

**Frontend**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white)

![Jest](https://img.shields.io/badge/Jest-Testing-C21325?logo=jest&logoColor=white)


**Backend (planejado)**

![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase&logoColor=black)

**Outros**
- Git & GitHub
- ESLint
- Axios
- Arquitetura modular


<br/>

## 📁 Estrutura do Projeto

```bash
src/
 ├─ components/   # Componentes reutilizáveis
 ├─ hooks/        # Hooks personalizados
 ├─ layout/       # Estrutura base (sidebar, header, etc.)
 ├─ pages/        # Páginas do dashboard
 ├─ services/     # Comunicação com API
 ├─ utils/        # Funções utilitárias
 ├─ types/        # Tipagens globais
 ├─ test/         # Testes (em evolução)
```
<br/>

## ⚙️ Instalação e Execução

### Pré-requisitos

- Node.js >= 18
  
- npm ou yarn
  
```bash
# Clonar o repositório
git clone https://github.com/seu-username/dashboard-rh.git

# Entre na pasta
cd rh_dashboard

# Instalar dependências
npm install

# Executar o projecto
npm run dev
```

<br/>


### Configuração do Firebase (🔥 MUITO importante)

```md
## 🔥 Firebase

Este projeto utiliza **Firebase Firestore** como backend.

### Configuração

1. Crie um projeto no Firebase
2. Ative o Firestore Database
3. Crie um arquivo `.env` na raiz do projeto:

env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
````

<br/>

## 📍 Estado do Projeto 
🚧 Em desenvolvimento

- Home / Dashboard
  
- Modal de criação de colaborador
  
- Calendário de folgas

(Em breve: link para versão deployada)
