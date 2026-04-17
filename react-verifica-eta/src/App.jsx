import { useEffect, useState } from 'react';

/**
 * ESERCIZIO VERIFICA ETA
 * 
 * 1) Chiedere l'età
 * 2) Verificare se l'età è maggiore o minore a X
 * 3) Mostrare un testo "Sei maggiorenne" / "Sei minorenne"
 */

function App() {

  useEffect(
    () => {
      const eta = Number( prompt("Dimmi la tua età") );

      if (isNaN(eta)) {
        return alert("Errore: non hai inserito un numero")
      }

      eta >= 18 ? alert("Sei maggiorenne") : alert("Sei minorenne");
    },
    []
  );

  return (
    <>
    </>
  )
}

export default App
