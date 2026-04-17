import { useState } from "react";

function App() {
  const [listaCoseDaFare, aggiornaLista] = useState([
    { nome: "cosa da fare 1" },
    { nome: "cosa da fare 2" },
    { nome: "cosa da fare 3" },
    { nome: "cosa da fare 4" },
  ]);

  const [inputUtente, inserisciInputUtente] = useState();

  console.log(listaCoseDaFare);

  /**
   * Funzione per aggiungere un elemento
   *
   * VEDI IL PULSANTE PER AGGIUNGERE UN ELEMENTO
   */
  function aggiungiElemento() {
    aggiornaLista([
      ...listaCoseDaFare,
      {
        nome: inputUtente,
      },
    ]);

    console.log(inputUtente);
  }

  /**
   * Questa funzione inserisce il testo dell'input dentro
   * lo stato "inputUtente"
   */
  function intercettaInput(evento) {
    inserisciInputUtente(evento.target.value);
  }

  return (
    <>
      <h1>Realizziamo una "To Do List"</h1>

      <p>
        {listaCoseDaFare.length > 1 ? "Ci sono " : "C'è "}
        {listaCoseDaFare.length}
        {listaCoseDaFare.length > 1 ? " elementi" : " elemento"}
      </p>

      <ul>
        {listaCoseDaFare.map((elemento, indice) => {
          console.log(elemento, indice);

          return (
            <li key={indice}>
              {elemento.nome}

              <button
                onClick={() => {
                  const listaAggiornata = listaCoseDaFare.filter(
                    (elemento, i) => i !== indice,
                  );

                  aggiornaLista(listaAggiornata);
                }}
              >
                Elimina
              </button>
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        placeholder="Inserisci un elemento..."
        onInput={intercettaInput}
      />

      <button onClick={aggiungiElemento}>Aggiungi alla To Do List</button>
    </>
  );
}

export default App;
