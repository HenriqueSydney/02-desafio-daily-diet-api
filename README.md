# APP

Daily Diet API - Rocketseat Challenge 

## RFs (Requisitos Funcionais)
[X] Deve ser possível criar um usuário
[X] Deve ser possível identificar o usuário entre as requisições
[X] Deve ser possível registrar uma refeição feita, com as seguintes informações:    
    * As refeições devem ser relacionadas a um usuário.*
        [X] Nome
        [X] Descrição
        [X] Data e Hora
        [X] Está dentro ou não da dieta
[X] Deve ser possível editar uma refeição, podendo alterar todos os dados acima
[X] Deve ser possível apagar uma refeição
[X] Deve ser possível listar todas as refeições de um usuário
[X] Deve ser possível visualizar uma única refeição
[X] Deve ser possível recuperar as métricas de um usuário
    [X] Quantidade total de refeições registradas
    [X] Quantidade total de refeições dentro da dieta
    [X] Quantidade total de refeições fora da dieta
    [X] Melhor sequência por dia de refeições dentro da dieta
[X] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

## RN (Regras de Negócio)
[X] O usuário não deve poder se cadastrar com um e-mail duplicado;

## RNFs (Requisitos não-funcionais)
[X] A senha do usuário precisa estar criptografada;
[X] Os dados da aplicação precisão estar persistidos em um banco PostgreSQL;
[X] Todas as listas de dados precisam estar paginadas com 20 itens por página;
[X] O usuário deve ser identificado por um JWT (JSON Web Token);