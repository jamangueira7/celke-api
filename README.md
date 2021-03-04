<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>

<br>


# Celke - Semana de Imersão ao Node.js, React e React Native

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5) 
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) 
- [NodeJS](https://nodejs.org/en/) - v14.4.0
- [NextJS](https://nextjs.org/)
- [Docker](https://www.docker.com/)


## 💻 Projeto

Esse projeto é uma API usada para aprender NodeJS e Mongoose.

Projeto desenvolvido acompanhado as aulas do Celke na semana de Imersão ao Node.js, React e React Native.

Font-end [aqui](https://github.com/jamangueira7/celke-node-js)

Canal [aqui](https://www.youtube.com/channel/UC5ClMRHFl8o_MAaO4w7ZYug)

<p align="center">
  <img alt="pagina inicial" src=".github/imagem1.PNG" width="100%">
</p>

## 🚀 Como Rodar

 - Clone o projeto.
 - Entre na pasta do projeto e rode o comando "npm install" para instalar as dependências.
 - Rode "npm run dev" para iniciar o servidor.
 - Rodar o MongoDB com docker: docker run --name mongodb -p 27017:27017 -d -t mongo
 - Para testar, acesse localhost:3333.
 
## 👩🏿‍💻 Rotas

- **`POST /home`**: Rota para cadastra dados da home;
Retorno
```
{
    "error": false,
    "home": {
        "_id": "60400f602c5c0a10dcf30c32",
        "topTitulo": "Temos a solução que usa empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "Orçamento",
        "topLinkBtn": "laptop-code",
        "serTitulo": "Serviços",
        "serSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serUmIcon": "",
        "serUmTitulo": "Serviço um",
        "serUmDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serDoisIcon": "mobile-alt",
        "serDoisTitulo": "Serviço dois",
        "serDoisDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serTresIcon": "network-wired",
        "serTresTitulo": "Serviço três",
        "serTresDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "createdAt": "2021-03-03T22:36:16.563Z",
        "updatedAt": "2021-03-03T22:36:16.563Z",
        "__v": 0
    }
}
```

- **`GET /home`**: Rota para retornar dados da home;
Retorno
```
{
    "error": false,
    "home": {
        "_id": "60400f602c5c0a10dcf30c32",
        "topTitulo": "Temos a solução que usa empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "Orçamento",
        "topLinkBtn": "laptop-code",
        "serTitulo": "Serviços",
        "serSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serUmIcon": "",
        "serUmTitulo": "Serviço um",
        "serUmDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serDoisIcon": "mobile-alt",
        "serDoisTitulo": "Serviço dois",
        "serDoisDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serTresIcon": "network-wired",
        "serTresTitulo": "Serviço três",
        "serTresDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "createdAt": "2021-03-03T22:36:16.563Z",
        "updatedAt": "2021-03-03T22:36:16.563Z",
        "__v": 0
    }
}
```

- **`POST /orcamento`**: Rota para cadastra orcamentos;
Envio
```
{
    "name": "João Carlos2",
    "email": "joao.carlos2@email.com",
    "phone": "(11) 1111-1111",
    "whatsApp": "(11) 1111-1111",
    "projeto": "Criar sistema ADM"
}
```

Retorno
```
{
    "error": false,
    "message": "Solicitação de orçamento enviado com sucesso"
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
