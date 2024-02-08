const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
          "Manipular dados no banco de dados",
          "Estilizar páginas HTML",
          "Adicionar interatividade às páginas web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: [
          "variable",
          "var",
          "declare",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
          "Uma função",
          "Um tipo de dado que armazena valores de forma ordenada",
          "Um objeto",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle que permite executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
      respostas: [
          "if-else",
          "for",
          "switch",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
          "Adicionar um elemento ao DOM",
          "Adicionar um ouvinte de eventos a um elemento",
          "Adicionar um estilo a um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
          "Um tipo de dado",
          "Uma linguagem de programação",
          "A representação da estrutura hierárquica dos elementos HTML de uma página",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
          "Levantar um elemento na página",
          "Elevar uma função para o topo do escopo antes da execução do código",
          "Um método de ordenação de arrays",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é utilizado para imprimir mensagens no console em JavaScript?",
      respostas: [
          "logMessage()",
          "print()",
          "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
          "Um tipo de dado",
          "Um bloco de código reutilizável que pode receber e retornar valores",
          "Uma variável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
          "Não há diferença, ambos comparam valores de forma estrita",
          "==' compara apenas valores, enquanto '===' compara valores e tipos",
          "===' compara apenas valores, enquanto '==' compara valores e tipos",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laco de repeticao
  for(const item of perguntas) {
    //clonando o template
  const quizItem = template.content.cloneNode(true)
  //modificando o h3
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    //mudando o conteudo do span 
    dt.querySelector('span').textContent = resposta
  
    //preciso resolver o problema do input
    dt.querySelector('input').setAttribute('name', 'pergunta - ' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    //estou deletando o item para eu verificar se ele existir, e se ele existir pode colocar dnv
    corretas.delete(item)
  
  
    if(estaCorreta){
      corretas.add(item)
    }
  
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
    //colocar respostas na tela
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  //deletar o resposta A
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }