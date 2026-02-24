import { useEffect, useState } from "react";

// Importa i componenti
import Table from "./components/Table";
import Spinner from "./components/Spinner";

/**
 * Questa funzione qui sotto è un componente React.
 * 
 * Ricorda sempre di esportare il tuo componente alla fine del file
 * 
 * NOTA ARCHITETTURALE DEL SOFTWARE:
 * A livello progettuale, il componente App.jsx dovrebbe contenere
 * meno complessità possibile. A scopo didattico va bene snaturare
 * qualsiasi concetto pur di capirlo.
 * 
 * Ma per esercitarci isoliamo e spostiamo i singoli 
 * componenti in file JSX dentro una cartella src/components.
 * 
 * @returns JSX
 */
function App() {

  /**
   * useEffect
   */
  useEffect(() => {

    setTimeout(
      () => {
        fetch('https://dummyjson.com/users')
          .then(response => response.json())
          .then(data => {
            console.log(data);

            const listaUtenti = data.users;

            inserisciUtenti(listaUtenti);
        })
      }, 5000
    );

  }, []);

  /**
   * useState è un hook (gancio) di React per gestire la 
   * memoria del componente in modo dinamico.
   * 
   * Quindi, se la memoria dentro useState cambia o viene
   * aggiornata il componente viene renderizzato da capo.
   * 
   * Quando uso useState vado a destrutturare (vedi destructuring)
   * la costante in un array.
   * 
   * Nell'esempio qui sotto ho:
   * [utenti, inserisciUtenti]
   * 
   * Questo array ha due elementi, la prima è la variabile
   * vera e propria che contiene i dati, la seconda è una funzione
   * per sovrascrivere quella stessa memoria.
   */
  const [utenti, inserisciUtenti] = useState(null);

  /**
   * Qui ritorniamo DOM Virtuale / JSX
   * 
   * NOTA: Non puoi ritornare più elementi 
   * parenti subito dopo il return, quindi li avvolgo prima
   * dentro i frammenti JSX <></> oppure uso un <div></div>, o 
   * altro tag a me congeniale.
   */
  return (
    <div className="p-4">
      <div className="text-center mt-[30px] mb-[20px]">
        <h1 className="font-bold text-3xl">Gestione utenti</h1>
      </div>

      {utenti ? <Table utenti={utenti}/> : <Spinner loadText="Caricamento in corso dei prodotti..."/>} 
    </div>
  )
}

/**
 * Qui esportiamo il componente
 */
export default App;