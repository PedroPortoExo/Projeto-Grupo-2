# Projeto Grupo 2
 projeto em equipe da step 

# Requisitos do Sistema de Gerenciamento de Biblioteca

## 1. DO QUE O SISTEMA É FEITO

- **Lista de Livros:** O sistema deve manter uma lista de todos os livros disponíveis na biblioteca, com informações como título, autor, categoria e quantidade de exemplares.

- **Categorias de Livros:** Cada livro deve estar associado a uma categoria, como ficção, não-ficção, ciência, tecnologia, etc.

- **Status dos Livros:** O sistema deve indicar quais livros estão disponíveis para empréstimo e quais estão emprestados, considerando a quantidade de exemplares.

- **Controle de Empréstimos:** Cada empréstimo deve ter um período específico de devolução para cada livro emprestado. O sistema deve gerenciar múltiplos empréstimos por usuário, permitindo prazos diferentes.

- **Lista de Usuários:** O sistema deve manter um cadastro atualizado dos usuários que podem realizar empréstimos, incluindo informações de contato e status de empréstimos.

## 2. COMO O SISTEMA SE COMPORTARÁ

- **Atualização da Disponibilidade de Livros:** O sistema deve atualizar automaticamente o status de disponibilidade de um livro quando ele é emprestado ou devolvido.

- **Controle de Quantidade de Exemplares:** Se houver mais de um exemplar de um livro e apenas um deles estiver emprestado, o sistema deve permitir que o outro exemplar seja solicitado.

- **Controle de Prazos de Empréstimo:** Para cada livro emprestado, o sistema deve calcular e informar quantos dias restam para a devolução, exibindo alertas se o prazo estiver próximo do vencimento.

## 3. COMO SERÁ A INTERAÇÃO DO USUÁRIO COM O SISTEMA

- **Consulta de Livros:** Os usuários podem visualizar uma lista de livros, filtrando por título, autor, categoria e status (disponível/emprestado).

- **Solicitação de Empréstimo:** Após acessar o sistema, o usuário pode solicitar o empréstimo de um ou mais livros. Para cada livro, será exibido o prazo de devolução.

- **Painel de Controle do Usuário:** Cada usuário terá uma área para visualizar seus empréstimos ativos e a data de devolução de cada livro.

- **Cadastro e Gerenciamento de Usuários:** A biblioteca será responsável pelo cadastro e atualização das informações dos usuários.

## 4. OUTROS REQUISITOS

- **Design Responsivo e Acessibilidade:** O sistema deverá ser intuitivo e acessível, sendo adaptado para diferentes dispositivos.

- **Segurança de Acesso:** Acesso autenticado para empréstimos e devoluções, garantindo a segurança dos dados dos usuários e registros de empréstimos.
