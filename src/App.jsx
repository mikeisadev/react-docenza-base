
/**
 * Questa funzione qui sotto è un componente React.
 * 
 * Ricorda sempre di esportare il tuo componente alla fine del file
 * 
 * @returns JSX
 */
function App() {
  const utenti = [
    {
      id: 1,
      nome: "Luca",
      cognome: "Ferrari",
      email: "luca.ferrari@mail.it",
      telefono: "347 123 4567",
      indirizzo: "Via Roma 12, 20121 Milano (MI)",
      genere: "M"
    },
    {
      id: 2,
      nome: "Giulia",
      cognome: "Bianchi",
      email: "giulia.bianchi@mail.it",
      telefono: "329 555 0182",
      indirizzo: "Corso Vittorio Emanuele II 45, 80121 Napoli (NA)",
      genere: "F"
    },
    {
      id: 3,
      nome: "Marco",
      cognome: "Russo",
      email: "marco.russo@mail.it",
      telefono: "388 902 7741",
      indirizzo: "Via Garibaldi 7, 10122 Torino (TO)",
      genere: "M"
    },
    {
      id: 4,
      nome: "Sara",
      cognome: "Conti",
      email: "sara.conti@mail.it",
      telefono: "333 670 1129",
      indirizzo: "Viale Trastevere 90, 00153 Roma (RM)",
      genere: "F"
    },
    {
      id: 5,
      nome: "Andrea",
      cognome: "Romano",
      email: "andrea.romano@mail.it",
      telefono: "340 818 3306",
      indirizzo: "Piazza Duomo 3, 50122 Firenze (FI)",
      genere: "M"
    },
    {
      id: 6,
      nome: "Andrea",
      cognome: "Romano",
      email: "andrea.romano@mail.it",
      telefono: "340 818 3306",
      indirizzo: "Piazza Duomo 3, 50122 Firenze (FI)",
      genere: "M"
    },
    {
      id: 7,
      nome: "Andrea",
      cognome: "Romano",
      email: "andrea.romano@mail.it",
      telefono: "340 818 3306",
      indirizzo: "Piazza Duomo 3, 50122 Firenze (FI)",
      genere: "M"
    },
    {
      id: 8,
      nome: "Michele",
      cognome: "Mincone",
      email: "andrea.romano@mail.it",
      telefono: "340 818 3306",
      indirizzo: "Piazza Duomo 3, 50122 Firenze (FI)",
      genere: "M"
    }
  ];

  // Qui ritorniamo DOM Virtuale / JSX
  return (
    <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
      <table class="w-full text-left table-auto min-w-max text-slate-800">
        <thead>
          <tr class="text-slate-500 border-b border-slate-300 bg-slate-50">
            <th class="p-4">
              <p class="text-sm leading-none font-normal">
                ID
              </p>
            </th>
            <th class="p-4">
              <p class="text-sm leading-none font-normal">
                Nome
              </p>
            </th>
            <th class="p-4">
              <p class="text-sm leading-none font-normal">
                Cognome
              </p>
            </th>
            <th class="p-4">
              <p class="text-sm leading-none font-normal">
                Email
              </p>
            </th>
            <th class="p-4">
              <p class="text-sm leading-none font-normal">
                Telefono
              </p>
            </th>
            <th class="p-4">
              <p class="text-sm leading-none font-normal">
                Indirizzo
              </p>
            </th>
            <th class="p-4">
              <p class="text-sm leading-none font-normal">
                Genere
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            utenti.map(utente => {

              return (
                <tr class="hover:bg-slate-50">
                  <td class="p-4">
                    <p class="text-sm font-bold">
                      {utente.id}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {utente.nome}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {utente.cognome}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {utente.email}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {utente.telefono}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm font-semibold ">
                      {utente.indirizzo}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm font-semibold ">
                      {utente.genere}
                    </p>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

/**
 * Qui esportiamo il componente
 */
export default App
