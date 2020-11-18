# Superagro backend

A aplicação consiste em um backend para uma aplicação mobile que ajuda um dono de uma granja gerenciar seu negócio.

Um dos objetivos da aplicação também consiste em assegurar que o desenvolvedor responsável possui conhecimentos e habilidades para o bom desenvolvimento de uma api rest com NodeJs.

## Nota de versões:
O projeto está configurado com docker e utiilza as imagens:

* Node 14.15.0-alpine3.11
* (PostgreSQL) 13.1 (Debian 13.1-1.pgdg100+1)

## Começando

É necessário apenas ter o docker e o docker-compose instalados.
As versões utilizadas no desenvolvimento foram:

- Docker version 19.03.13, build 4484c46d9d
- docker-compose version 1.25.0, build unknown

Certificado de que ambos estão instalados, na raiz do projeto execute o comando:
```
  docker-compose up --build
```
OBS: É necessário dar permissão para o usuário acessar o diretório .docker na raiz do projeto.
pois sem permissão o docker não conseguirá executar o script de inicialização do server em Node.

O docker irá baixar as imagens que você não tiver instalados localmente, executará o container do postgres, após isso irá recuperar as dependências do projeto em node, executar as migrations e as seeds com sequelize e então subirá o server localmente de forma automática.
No fim você terá uma saída semelhante à "SERVER ONLINE ON PORT 3001!".

Bem sucedido o processo de build e levantamento dos containers, você já pode consumir as rotas através da https://localhost:3001/app. <br />
Como o backend possui apenas recursos básicos para consumir dados relacionados aos animais cadastrados, cada verbo http corresponde uma uma rota

GET = (https://localhost:3001/app/) - Retorna uma lista com todos os animais cadastrados <br />
GET = (https://localhost:3001/app/?id=[some_id]) - Retorna o animal pelo id <br />
POST = (https://localhost:3001/app/) - Rota para persistir um novo animal <br />
PUT = (https://localhost:3001/app/[some_id]) -  Rota para persistir um novo animal <br />
DELETE = (https://localhost:3001/app/[some_id]) - Rota para excluir um animal <br />

## Considerações

Infelizmente, devido ao pouco tempo disponível para produzir, não foi possível aplicar uma validação detalhada nos dados de entrada durante o cadastro, dedicar um tempo para fazer testes automatizados e configurar o swagger. Porém o projeto é sucetível à manutenção.

## Autor

* **David Ferreira**
