// Da react import useState e useEffect che sono gli hook react principali da sapere
import { useEffect, useState } from "react";

// Importo gli oggetti Javascript di configurazione
import { confUtenti, confProdotti } from './data/tabelle.js'

// Importo i miei componenti personalizzati
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
   * useState è un hook (gancio) di React per gestire la 
   * memoria del componente in modo dinamico.
   * 
   * React osserva sempre il contenuto di ogni variabile che ha al suo interno uno
   * "useState". 
   * 
   * Qualora il contenuto di quella variabile dovesse cambiare, React
   * ri-renderizza il componente per te facendoti vedere i dati aggiornati.
   * 
   * Quando uso useState vado a destrutturare (vedi destructuring)
   * la costante in un array: estrando la variabile per accedere allo stato (o memoria)
   * e la funzione per modificare lo stato (o memoria)
   * 
   * Nell'esempio qui sotto ho:
   * const [utenti, inserisciUtenti] = useState(null)
   * 
   * Questo array ha due elementi:
   * - la prima è la variabile "utenti" che contiene i dati
   * - la seconda è la funzione per sovrascrivere quella memoria.
   */
  const [utenti, inserisciUtenti] = useState(null);
  const [prodotti, inserisciProdotti] = useState(null);

  /**
   * useEffect -> è un HOOK di React per gestire gli "effetti collaterali" dell'app
   * 
   * Ogni useEffect ha un effetto collaterale che è il primo argomento, in cui 
   * definisco una funzione di callback.
   * 
   * Il secondo argomento è solitamente un array vuoto o un array che contiene il nome
   * degli stati React che vogliamo "tracciare" quando cambiano.
   * 
   * NOTA: per capire USE EFFECT devo comprendere meglio il ciclo di vita del componente
   * 
   * CICLI DI VITA DEL COMPONENTE E MOMENTI DI ESECUZIONE DELLA FUNZIONE CALLBACK:
   * 
   * Abbiamo detto che useEffect "genera un effetto collaterale" che è la funzione callback
   * con tutte le istruzioni che io scrivo in quella funzione.
   * 
   * Nota bene che ogni componente react ha il suo ciclo di vita. Comprendere il ciclo di vita
   * di un componente React è fondamentale per comprendere perché useEffect avvia la sua funzione
   * di callback.
   * 
   * Il ciclo di vita di un componente React ha tre fasi:
   * - MOUNT (o MOUNTING) -> quando carico la pagina avviene il rendering di uno o più componenti
   * - RE-RENDERING (o NUOVO RENDERING) -> quando cambiano uno o più stati (useState) React renderizza nuovamente il componente
   * - UNMOUNT (UNMOUNTING, o DISTRUZIONE) -> distruzione del componente
   * 
   * useEffect risponde a ogni fase del ciclo di vita.
   * 
   * Ogni volta che il componente viene renderizzato, useEffect innesca la sua funzione di callback.
   * 
   * useEffect posso innescarlo al momento di RE-RENDERING indicando nell'array, che è il secondo argomento,
   * la variabile dello stato che voglio "tracciare".
   * 
   * Anche quando il componente viene DISTRUTTO (UNMOUNTING) useEffect viene triggerato.
   * 
   * RIEPILOGO:
   * - ogni volta che il componente viene renderizzato useEffect viene innescato
   * - nel RE-RENDERING devo specificare la variabile di stato che voglio tracciare nei sui cambiamenti
   * - oppure nella fase di UNMOUNT (o UNMOUNTING, o DISTRUZIONE)
   */
  useEffect(() => {

    /**
     * Attento che il timeout è per creare un ritardo/delay
     * artificiale, realmente non è utile
     */
    setTimeout(() => {
        // Fetch users (ottieni utenti)
        fetch('https://dummyjson.com/users?limit=10')
          .then(response => response.json())
          .then(data => {
            console.log("UTENTI", data);

            const listaUtenti = data.users;

            inserisciUtenti(listaUtenti);
        });

        // Fetch products (ottieni prodotti)
        fetch('https://dummyjson.com/products?limit=10')
          .then(response => response.json())
          .then(data => {
            console.log("PRODOTTI", data);

            const listaProdotti = data.products;

            inserisciProdotti(listaProdotti);
          })
      }, 2000
    );

  }, []);

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
      { /** Lista utenti */ }
      <div className="text-center mt-[30px] mb-[20px]">
        <h1 className="font-bold text-3xl">Gestione utenti</h1>
      </div>

      {
        utenti ? 
        <Table configurazione={confUtenti} dati={utenti} /> 
        : 
        <Spinner loadText="Caricamento in corso dei prodotti..."/>
      }

      { /** Lista prodotti */ }
      <div className="text-center mt-[30px] mb-[20px]">
        <h1 className="font-bold text-3xl">Gestione prodotti</h1>
      </div>

      {
        prodotti ? 
        <Table configurazione={confProdotti} dati={prodotti} /> 
        : 
        <Spinner loadText="Caricamento in corso dei prodotti..."/>
      } 
    </div>
  )
}

/**
 * Qui esportiamo il componente
 */
export default App;