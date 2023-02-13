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
* [Hooks](#hooks)
* [useEffect](#useeffect)

<br>

## State dos Componentes
---
### **O que setState faz?**
setState() agenda uma atualização para o objeto state de um componente. Quando o state muda, o componente responde renderizando novamente.

<br>

### **Qual é a diferença entre state e props?**
props são passados para o componente (como parâmetros de funções), enquanto state é gerenciado de dentro do componente (como variáveis declaradas dentro de uma função).

<br>

## Immutability
---
Elementos React são imutáveis. Uma vez criados, você não pode alterar seus elementos filhos ou atributos, única maneira de atualizar a IU é criar um novo elemento e renderizado, pois isso é mais performático.

Diferente de elementos DOM do navegador, elementos React são objetos simples e utilizam menos recursos. O React DOM é o responsável por atualizar o DOM para exibir os elementos React.

Esta ideia vem da programação funcional, [saiba mais.](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_funcional)

<br>

## Key Prop
---
As keys ajudam o react a ser mais performático, para ele identificar quais items foram alterados, quais foram adicionados, ou quais foram removidos. Keys devem ser dadas a elementos em um array para dar a estes elementos uma identidade única.

As Keys precisam ser únicas entre os elementos de um mesmo array. Mas não precisam ser exclusivos em toda a aplicação ou até mesmo em um único componente. Idealmente, Keys devem corresponder a identificadores únicos e estáveis vindos dos seus dados, como post.id.

<br>

## Hooks
---
Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

### **O que é um Hook?** 
Um Hook é uma função especial que te permite utilizar recursos do React. Por exemplo, useState é um Hook que te permite adicionar o state do React a um componente de função.

### **Quando eu deveria usar um Hook?**
Se você escreve um componente de função e percebe que precisa adicionar algum state para ele, anteriormente você tinha que convertê-lo para uma classe. Agora você pode usar um Hook dentro de um componente de função existente.

<br>

## UseEffect
Mutações, assinaturas, temporizadores, logs e outros side effects não são permitidos dentro do corpo principal de um componente funcional (React se refere a isso como render phase). Usá-los levará a erros confusos e inconsistências na UI.

Em vez disso, use useEffect. A função passada para useEffect será executada depois que a renderização estiver disponível na tela. Pense em efeitos como um rota de fuga do mundo puramente funcional do React para o mundo imperativo.

Por padrão, os efeitos são executados após cada renderização concluída, mas você pode optar por dispará-los somente quando determinados valores receberam atualização.

E comummente usada para rederizar dados de una API


## Autora
---

👤 **Micaela Pinheiro**

- Twitter: [@micaelapinheir7](https://twitter.com/micaelapinheir7)
- Github: [@MicaelaPinheiroDS](https://github.com/MicaelaPinheiroDS)
- LinkedIn: [@micaela-pinheiro](https://linkedin.com/in/micaela-pinheiro)

<br>

## Fontes de Referências

* [**rocketseat Discover**](https://www.rocketseat.com.br/)
* [**React Doc**](https://pt-br.reactjs.org/)

<br>

## 📝 License
---
This project is MIT licensed.

