# 🧠 Projeto de QA E2E — AdoPet (Cypress + CI/CD)

## 💡 Sobre o Projeto
Este repositório apresenta um projeto completo de **Quality Assurance (QA)** com foco em **automação de testes E2E, análise de performance e usabilidade**, utilizando a aplicação **[AdoPet](https://adopet-frontend-cypress.vercel.app)** como base.

## 🎯 Objetivos
- Validar fluxos principais de forma automatizada.
- Documentar e demonstrar práticas de QA profissionais.
- Integrar automação com pipeline CI/CD no GitHub Actions.

## 🧰 Stack
- **Cypress** — testes E2E
- **Node.js / npm**
- **GitHub Actions** — CI/CD
- **Lighthouse** — performance
- **axe-core** — acessibilidade
- **Notion** — documentação complementar

## 🧩 Estrutura

```bash
.
├── cypress/
│   ├── e2e/                # Testes E2E (fluxos de ponta a ponta)
│   ├── fixtures/           # Massa de dados (users, mocks, etc.)
│   ├── support/            # Commands, Page Objects, hooks globais
│   ├── reports/            # Relatórios JSON do Mochawesome
│   ├── screenshots/        # Evidências de falhas
│   └── videos/             # Gravações das execuções em headless
│
├── docs/
│   ├── plano-de-teste.md   # Estratégia e escopo de testes
│   ├── casos-de-teste.md   # Casuística funcional e E2E
│   ├── bugs.md             # Gestão e histórico de defeitos
│   ├── usabilidade.md      # Achados de UX e heurísticas
│   ├── performance.md      # Resultados de testes de performance
│   └── acessibilidade.md   # Análises de acessibilidade
│
├── .github/
│   └── workflows/
│       └── cypress.yml     # Pipeline de CI (GitHub Actions)
│
├── cypress.config.js       # Configuração central do Cypress
├── package.json            # Scripts npm e dependências do projeto
├── package-lock.json
└── README.md               # Documentação principal do projeto

