import { useState, useEffect } from 'react';
import Header from "./components/Header";

function App() {
  const nomeSito = "Contatore React";

  const limiteMassimo = 15;

  const [contatore, modificaContatore] = useState(0);

  return (
    <>
      <Header />

      <h1 style={{ color: "red" }}>{nomeSito}</h1>

      <main>
        <p style={{ 
          color: "white", 
          fontSize: 24, 
          marginBottom: 10 
        }}>
          {contatore}
        </p>

        <button onClick={() => {
          if (!confirm("Sei sicuro di voler incrementare?")) {
            return;
          }

          if (contatore === limiteMassimo) {
            return alert("Non puoi superare i 15 click");
          }

          const value = contatore + 1

          modificaContatore(value)
        }}>
          Incrementa
        </button>

        <button onClick={() => {
          if (contatore === 0) {
            return alert("ATTENTO! Il contatore non può andare sotto lo zero");
          }
          
          modificaContatore(contatore - 1)
        }}>
          Diminiuisci
        </button>
      </main>

      <footer>
        <h4>Io sono il footer</h4>
      </footer>
    </>
  )
}

export default App