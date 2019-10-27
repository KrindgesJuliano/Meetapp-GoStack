# GoStack-MeetApp

## Mobile
 - Usuario pode se cadastras e alterar suas Informações.
 - Visualizar os meetups pelo dia selecionado.
 - Inscrever-se no meetups que ainda não aconteceram.
 - Cancelar inscrição
 - O organizador do meetup recebera um e-mail para cada inscrição.

 ## Web
 - Usuario pode se cadastras e alterar suas Informações.
 - Visualizar e Editar os seus Meetups que ainda não acontecaram.
 - Criar novos Meetups.
 - Cancelar Meetups com mais de um dia antes do data marcada.

 ## Autenticação
 - Usuaria pode Logar em ambas as plataformas utilizando e-mail e senha.
 - Autenticação é feita por Token, usando JWT.

## Iniciando o Projeto
- Você precisara ter todo ambiente React e React Native configurado em sua maquina.
- Com Docker inicie container do Postgres e Redis.
- Clone this Repository.
- Instale as depedencias usando o comando `yarn` em cada uma das pastas, **(backend, frontend, mobile)**.
- Entre na pasta **backend** e **mobile**, mudo o arquivo, `.env.example` para `.env` e prencha com as variaveis do seu ambiente de desenvovimento.
 - Entre na pasta **backend** e use o comando `yarn migrate` para iniciar o banco de dados.

 ## Observações
 - A Aplicação não foi testada no iOS

 ## Tecnologias Usadas
 - ReactJS
 - React Native
 - NodeJS
 - Styled Components
 - Redux
 - Redux Saga
 - Docker
 - Postgres
 - Redis
 - Node Mailer
 - Filas de execução
 - Reactotron
 - Outras bibliotecas do React e Node

 ## contribuidores
 - @KrindgesJuliano