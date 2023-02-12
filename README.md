<h1 align="center">Bem-Vindo ao Meu Primeiro "Projeto" Em React</h1>
<p align="center">
    <img alt="tag public" src="https://img.shields.io/badge/-Public-lightgreen">
    <img alt="tag study" src="https://img.shields.io/badge/-Study-lightblue">
    <a href="https://twitter.com/micaelapinheir7" target="_blank">
        <img alt="Twitter: micaela pinheiro" src="https://img.shields.io/twitter/follow/micaelapinheir7.svg?style=social" />
    </a>
</p>
<br>
<p align="center">
    <img style="width:180px" alt="log react.js" src="./.github/react-icon.svg">
</p>
<br>

## Sobre Este Projeto
Este projeto é caso de estudo onde busco dar meus primeiro passos no entendimento dos fundamentos do ReactJS, como:
* React file structure
* Fragment
* Component
* [State dos Componentes](#state-dos-componentes)
* [Immutability](#immutability)
* [Key Prop](#key-prop)

### State dos Componentes
---
#### O que setState faz?
setState() agenda uma atualização para o objeto state de um componente. Quando o state muda, o componente responde renderizando novamente.
#### Qual é a diferença entre state e props?
props são passados para o componente (como parâmetros de funções), enquanto state é gerenciado de dentro do componente (como variáveis declaradas dentro de uma função).
### Immutability
---
Elementos React são imutáveis. Uma vez criados, você não pode alterar seus elementos filhos ou atributos, única maneira de atualizar a IU é criar um novo elemento e renderizado, pois isso é mais performático.

Diferente de elementos DOM do navegador, elementos React são objetos simples e utilizam menos recursos. O React DOM é o responsável por atualizar o DOM para exibir os elementos React.

Esta ideia vem da programação funcional, [saiba mais.](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_funcional)


### Key Prop
---
As keys ajudam o react a ser mais performático, para ele identificar quais items foram alterados, quais foram adicionados, ou quais foram removidos. Keys devem ser dadas a elementos em um array para dar a estes elementos uma identidade única.

As Keys precisam ser únicas entre os elementos de um mesmo array. Mas não precisam ser exclusivos em toda a aplicação ou até mesmo em um único componente. Idealmente, Keys devem corresponder a identificadores únicos e estáveis vindos dos seus dados, como post.id.

## Autora
---

👤 **Micaela Pinheiro**

- Twitter: [@micaelapinheir7](https://twitter.com/micaelapinheir7)
- Github: [@MicaelaPinheiroDS](https://github.com/MicaelaPinheiroDS)
- LinkedIn: [@micaela-pinheiro](https://linkedin.com/in/micaela-pinheiro)

## Fontes de Referências

* [**rocketseat Discover**](https://www.rocketseat.com.br/)
* [**React Doc**](https://pt-br.reactjs.org/)
## 📝 License
---
This project is MIT licensed.

