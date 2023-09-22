import React from 'react';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';


// 6 - useState
import State from './components/State';

// 8 - type
type textOrNull = string | null


function App() {


  //  1- variaveis
  const name: string = "Gilson";
  const age: number = 57;
  const isworking: boolean = false;

  // 2- funções
  const userGreeting = (name: string): string => {
    return `olá, ${name}!`;
  }

  // 8 - type
  const myText:textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

 //mySecondText = "opa";


  return (
    <div className="App">

     <h1>TypeScript com React</h1> 
     <h2>Nome: {name}</h2>
     <p>Idade: {age}</p>
     {isworking && (
      <p>Está trabalhando</p>
     )}
     <h3>{userGreeting(name)}</h3>
     <FirstComponent />
     <SecondComponent name="Segundo"/>
     <Destructuring 
     title="primeiro post" 
     content="Algum conteudo" 
     commentsQty={10} 
     tags={["ts", "js"]}
     category={Category.TS}
     /> 
     <Destructuring 
     title="segundo post" 
     content="Mais outro conteudo" 
     commentsQty={5} 
     tags={["pyton"]}
     category={Category.P}
     />
     <State />
     {myText &&
     <p>Tem texto na variavel</p>

     }
     {mySecondText && 
     <p>Tem texto na variável</p>
      }
    </div>
  );
}

export default App;
