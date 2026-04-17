import { useState } from "react";

function App() {
  const listaCoseDaFare = [
    { nome: "Fare la spesa" },
    { nome: "Studiare le basi di Java" },
    { nome: "Finire gli esercizi React" },
    { nome: "Allenamento ore 19:00" },
    { nome: "Dormire" }
  ]

  const [inputUtente, inserisciInputUtente] = useState();

  console.log(listaCoseDaFare);

  return (
    <>
      <h1>Realizziamo una "To Do List"</h1>

      <ul>
      {
        listaCoseDaFare.map((elemento, indice) => {
          console.log(elemento, indice)

          return <li key={indice}>{elemento.nome}</li>;
        })
      }
      </ul>

      <input 
        type="text" 
        placeholder="Inserisci un elemento..." 
        onInput={(evento) => {
          inserisciInputUtente(evento.target.value)
        }}
      />
      
      <button onClick={() => {
        console.log(inputUtente)
      }}>Aggiungi alla To Do List</button>
    </>
  )
}

export default App
