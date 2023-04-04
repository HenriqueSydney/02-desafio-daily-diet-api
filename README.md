# APP<br>

Daily Diet API - Rocketseat Challenge <br>

## RFs (Requisitos Funcionais)<br>
[X] Deve ser possível criar um usuário<br>
[X] Deve ser possível identificar o usuário entre as requisições<br>
[X] Deve ser possível registrar uma refeição feita, com as seguintes informações:  <br>  
    - * As refeições devem ser relacionadas a um usuário.*<br>
        --[X] Nome<br>
        --[X] Descrição<br>
        --[X] Data e Hora<br>
        --[X] Está dentro ou não da dieta<br>
[X] Deve ser possível editar uma refeição, podendo alterar todos os dados acima<br>
[X] Deve ser possível apagar uma refeição<br>
[X] Deve ser possível listar todas as refeições de um usuário<br>
[X] Deve ser possível visualizar uma única refeição<br>
[X] Deve ser possível recuperar as métricas de um usuário<br>
    --[X] Quantidade total de refeições registradas<br>
    --[X] Quantidade total de refeições dentro da dieta<br>
    --[X] Quantidade total de refeições fora da dieta<br>
    --[X] Melhor sequência por dia de refeições dentro da dieta<br>
[X] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou<br>

## RN (Regras de Negócio)<br>
[X] O usuário não deve poder se cadastrar com um e-mail duplicado;<br>

## RNFs (Requisitos não-funcionais)<br>
[X] A senha do usuário precisa estar criptografada;<br>
[X] Os dados da aplicação precisão estar persistidos em um banco PostgreSQL;<br>
[X] Todas as listas de dados precisam estar paginadas com 20 itens por página;<br>
[X] O usuário deve ser identificado por um JWT (JSON Web Token);
