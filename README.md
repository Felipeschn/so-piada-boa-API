# README

#Teste Triider
Esse repositório tem como objetivo guiar e facilitar a execução do projeto.

Link de apresentação do projeto: https://youtu.be/mW-rGnXYknY

#Requisitos:

- Docker instalado na máquina.
- Algum SGDB mySQL ex: Workbench..

Rodar o arquivo so_piada_boa_felipe.sql para criar o Schema do banco com todas as suas tabelas e migrations.

----------------
arquivo `.env`:

`PORT=3001

HOST=localhost
USER=root
PASSWORD=root
DATABASE=so_piada_boa`

----------------------

Após isso, dentro da raiz do projeto (API) rodar o comando:

docker-compose up

Para criar as imagens, rodar os packages e tudo mais.

Documentação da API está em : http://localhost:3001/v1/api-docs (Swagger)

Qualquer dúvida estou a disposição.
