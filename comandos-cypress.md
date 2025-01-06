# Comandos Cypress
## Abrir o Cypress para rodar os cenários
- npx cypress open

## Rodar uma spec (suíte de testes) específica
- npx cypress run --spec ".\cypress\e2e\login-correto.cy.js"

## Rodar os testes em modo headless (abrir o terminal no VSCode)
- npx cypress run

## Instalar e rodar os testes gerando relatório (O comando instalação é realizado só uma vez)
- npm install --save-dev mochawesome 
- npx cypress open --reporter mochawesome - relatórios mocha

## Rodar os testes com o Cypress Cloud integrado
npx cypress run --record --key 30b8497c-9727-4044-9289-35bd5a7efd77
