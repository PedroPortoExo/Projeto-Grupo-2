# Sistema de Gerenciamento de Biblioteca 📚

Este projeto é um sistema de gerenciamento de biblioteca desenvolvido pela equipe Grupo 2 da Step. O objetivo do sistema é facilitar o controle e a gestão de livros e usuários em uma biblioteca, permitindo a consulta, empréstimo e devolução de livros de forma simples e eficiente.

💻 ## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **JavaScript**: Linguagem de programação para a lógica do front-end.
- **Bootstrap**: Framework CSS para um design responsivo e estilização.
- **HTML/CSS**: Estruturas básicas e estilos da interface.

## Funcionalidades do Sistema

🔷 1. Do que o sistema é feito

- **Lista de Livros**: Mantém uma lista de todos os livros disponíveis, com informações como título, autor, categoria e quantidade de exemplares.
- **Categorias de Livros**: Associa cada livro a uma categoria, como ficção, não-ficção, ciência, tecnologia, etc.
- **Status dos Livros**: Indica quais livros estão disponíveis para empréstimo e quais estão emprestados, considerando a quantidade de exemplares.
- **Controle de Empréstimos**: Gerencia o período de devolução para cada livro emprestado, permitindo múltiplos empréstimos por usuário.
- **Lista de Usuários**: Mantém um cadastro atualizado dos usuários que podem realizar empréstimos, incluindo informações de contato e status de empréstimos.

🔷 2. Como o sistema se comportará

- **Atualização da Disponibilidade de Livros**: O sistema atualiza automaticamente o status de disponibilidade de um livro quando ele é emprestado ou devolvido.
- **Controle de Quantidade de Exemplares**: Permite a solicitação de outros exemplares se apenas um deles estiver emprestado.
- **Controle de Prazos de Empréstimo**: Calcula e informa quantos dias restam para a devolução, exibindo alertas se o prazo estiver próximo do vencimento.

🔷 3. Como será a interação do usuário com o sistema

- **Consulta de Livros**: Os usuários podem visualizar uma lista de livros, filtrando por título, autor, categoria e status (disponível/emprestado).
- **Solicitação de Empréstimo**: Usuários podem solicitar o empréstimo de livros, com exibição do prazo de devolução para cada um.
- **Painel de Controle do Usuário**: Cada usuário terá uma área para visualizar seus empréstimos ativos e a data de devolução de cada livro.
- **Cadastro e Gerenciamento de Usuários**: A biblioteca será responsável pelo cadastro e atualização das informações dos usuários.

🔷 4. Outros requisitos

- **Design Responsivo e Acessibilidade**: O sistema é intuitivo e acessível, adaptado para diferentes dispositivos.
- **Segurança de Acesso**: O acesso ao sistema é autenticado, garantindo a segurança dos dados dos usuários e registros de empréstimos.

🔦 ## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https:[//github.com/seuusuario/sistema-gerenciamento-biblioteca.git](https://github.com/PedroPortoExo/Projeto-Grupo-2)

2. Navegue até o diretório do projeto:
   ```bash
    cd \project

3. Instale as dependências:
    ```bash
    npm install

4. Execute o projeto:
    ```bash
    npm start
