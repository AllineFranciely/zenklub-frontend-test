# Zenklub Frontend Challenge

---

Este projeto é uma aplicação frontend para agendamento de sessões com profissionais. Ele utiliza React, TypeScript, e styled-components para estilização. Além disso, uma API simulada é implementada com o json-server para manipular os dados de agendamentos.

---

## 🚀 Tecnologias Utilizadas
- React: Biblioteca para construção de interfaces de usuário.
- TypeScript: Superset do JavaScript que adiciona tipagem estática.
- styled-components: Para estilização dinâmica e componentes reutilizáveis.
- json-server: Para simulação de uma API REST.
- Axios: Para realizar requisições HTTP.

---

## ⚙️ Pré-requisitos
Certifique-se de ter instalado em sua máquina:

Node.js: v14 ou superior.
npm ou yarn: Gerenciador de pacotes.

---

## 📦 Instalação
Clone este repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git

Entre na pasta do projeto:
cd zenklub-frontend-test

Instale as dependências:
npm install

---

## 💻 Rodando o Projeto
Inicie a API simulada com o json-server:
npm run start-api
A API estará disponível em http://localhost:5000.

Inicie o servidor de desenvolvimento:
npm start
O frontend estará disponível em http://localhost:3000.

---

## 🛠 Funcionalidades
Exibição de profissionais com informações detalhadas.
Navegação entre datas para verificar horários disponíveis.
Agendamento de horários, alterando dinamicamente o estado de disponibilidade.
API simulada para carregar e atualizar dados.

---

## 📝 Rotas da API Simulada
GET /doctors
Retorna a lista de profissionais cadastrados.

PUT /doctors/:id
Atualiza os dados de um profissional, incluindo os agendamentos.

---

## 🎨 Estilo
O projeto utiliza styled-components para criar estilos dinâmicos, com suporte a temas e reutilização de componentes estilizados.

---

## 🧪 Testes Automatizados
# Configuração para Testes
Os testes foram implementados utilizando o framework Jest juntamente com a React Testing Library. O objetivo dos testes é garantir que os componentes funcionem corretamente, com ênfase na renderização, interatividade e integração com a API simulada.

# Bibliotecas de Teste Utilizadas
- Jest: Framework para execução de testes unitários e de integração.
- React Testing Library: Utilizada para testar a renderização de componentes e interações do usuário.
- @testing-library/jest-dom: Extensão do Jest para assertivas de DOM.

# Rodando os Testes
Para rodar os testes automatizados, basta executar o seguinte comando:

npm test

Isso iniciará o Jest e executará todos os testes na aplicação. Os testes verificam a funcionalidade de componentes como Schedule e DoctorCard, e verificam se os horários são corretamente exibidos, se os agendamentos funcionam e se os modais aparecem conforme esperado.

# Estrutura dos Testes
Os testes estão localizados na pasta src/__tests__, com os seguintes arquivos:
- DoctorCard.test.tsx: Testes para o componente DoctorCard.
- Schedule.test.tsx: Testes para o componente Schedule.

# Resolução de Erros Comuns
Se você encontrar problemas com os testes, como o erro de "TextEncoder is not defined" ou outros relacionados ao ambiente de testes, siga estas etapas:
- Instale dependências adicionais se necessário, como text-encoding.
- Certifique-se de que a configuração do Jest esteja correta, especialmente se estiver utilizando React Testing Library.

---

## 📜 Licença
Este projeto está licenciado sob a MIT License.

---

## 👨‍💻 Autor
Alline Franciely Silva
Sinta-se à vontade para contribuir ou sugerir melhorias! 😊
