
const Table = ({ configurazione, dati }) => {

    /**
     * L'oggetto di "configurazione" ha:
     * - nelle chiavi la mappatura dell'oggetto di risposta dal server
     * - nei valori ha le etichette delle colonne della tabella
     * 
     * Quindi uso delle funzioni built-in di Javascript per estrarre
     * chiavi e valori.
     * 
     * NOTA: per me i valori sono le "colonne" della tabella
     * APPROFONDIMENTO: rivedi la struttura degli oggetti esportati
     * dal file src/data/tabelle.js
     */
    const colonne = Object.values(configurazione);
    const chiavi = Object.keys(configurazione);

    console.log("COLONNE", colonne);
    console.log("CHIAVI", chiavi);

    return (
        <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <table className="w-full text-left table-auto min-w-max text-slate-800">
                <thead>
                    <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">

                        {
                            colonne.map(col => {
                                return (
                                    <th className="p-4">
                                        <p className="text-sm leading-none font-normal">
                                            {col}
                                        </p>
                                    </th>
                                );
                            })
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        dati 
                            ? dati?.map(oggetto => {

                                return (
                                    <tr className="hover:bg-slate-50">

                                        {
                                            chiavi?.map(chiave => {
                                                return (
                                                    <td className="p-4">
                                                        <p className="text-sm font-bold">
                                                            {oggetto[chiave]}
                                                        </p>
                                                    </td>
                                                )
                                            })
                                        }

                                    </tr>
                                );
                        }) : <p>Nessun utente disponibile</p>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;