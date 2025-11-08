# 🧩 Plano de Teste — Projeto AdoPet QA E2E

## 1. Objetivo
Garantir a qualidade funcional, visual e de desempenho do site **AdoPet**, validando os principais fluxos de negócio através de testes automatizados, manuais e análises complementares.

## 2. Escopo
**Inclui:**
- Login e cadastro de usuários
- Listagem de pets disponíveis
- Envio de mensagens aos abrigos
- Verificação de performance, acessibilidade e usabilidade

**Não inclui:**
- Back-end/API fora do mock do ambiente
- Fluxos administrativos

## 3. Tipos de Teste
| Tipo | Ferramenta | Descrição |
|------|-------------|-----------|
| Funcional (E2E) | Cypress | Fluxos principais do usuário |
| Regressão | Cypress | Garantir estabilidade após mudanças |
| Performance | Lighthouse / k6 | Medir tempo de carregamento e TTFB |
| Usabilidade | Checklist Nielsen | Avaliar clareza e consistência |
| Acessibilidade | axe-core / extensão | Verificar boas práticas de UI/UX |
| Cross-browser | Cypress | Validar em Chrome, Edge e Firefox |

## 4. Ambientes de Teste
| Ambiente | URL |
|-----------|------|
| Produção | https://adopet-frontend-cypress.vercel.app |

## 5. Critérios de Aceite
- Todos os testes críticos com status **Passed**
- Nenhum bug crítico ou bloqueante aberto
- Documentação de execução registrada

## 6. Riscos
- Instabilidade no ambiente online (Vercel)
- Mudanças não versionadas no front-end

## 7. Entregáveis
- Casos de teste automatizados (Cypress)
- Relatórios de execução (screenshots + vídeos)
- Documentos: plano, bugs, usabilidade, performance

## 8. Cronograma (estimado)
| Etapa | Duração | Status |
|-------|----------|--------|
| Criação do plano | 1 dia | ✅ |
| Automação E2E | 3 dias | 🔄 |
| Testes não-funcionais | 2 dias | ⏳ |
| Documentação final | 1 dia | ⏳ |
