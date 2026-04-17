import { useState } from "react";

function App() {
  const [listaCoseDaFare, oohAggiorna] = useState([
  ])

  const [inputUtente, inserisciInputUtente] = useState();

  console.log(listaCoseDaFare);

  return (
    <>
      <h1>Realizziamo una "To Do List"</h1>

      <p>
        {listaCoseDaFare.length > 1 ? 'Ci sono ' : "C'è "} 
        {listaCoseDaFare.length} 
        {listaCoseDaFare.length > 1 ? ' elementi' : ' elemento'}
      </p>

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
        oohAggiorna([
          ...listaCoseDaFare,
          {
            nome: inputUtente
          }
        ])
        
        console.log(inputUtente)
      }}>Aggiungi alla To Do List</button>
    </>
  )
}

export default App
