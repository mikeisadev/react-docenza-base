
const Table = ({ utenti }) => {
    
    return (
        <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <table className="w-full text-left table-auto min-w-max text-slate-800">
                <thead>
                    <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                            ID
                            </p>
                        </th>
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                            Nome
                            </p>
                        </th>
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                            Cognome
                            </p>
                        </th>
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                            Email
                            </p>
                        </th>
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                            Telefono
                            </p>
                        </th>
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                            Indirizzo
                            </p>
                        </th>
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                            Genere
                            </p>
                        </th>
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                            Università
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        utenti?.map(utente => {

                            return (
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4">
                                    <p className="text-sm font-bold">
                                        {utente.id}
                                    </p>
                                    </td>
                                    <td className="p-4">
                                    <p className="text-sm">
                                        {utente.firstName}
                                    </p>
                                    </td>
                                    <td className="p-4">
                                    <p className="text-sm">
                                        {utente.lastName}
                                    </p>
                                    </td>
                                    <td className="p-4">
                                    <p className="text-sm">
                                        {utente.email}
                                    </p>
                                    </td>
                                    <td className="p-4">
                                    <p className="text-sm">
                                        {utente.phone}
                                    </p>
                                    </td>
                                    <td className="p-4">
                                    <p className="text-sm font-semibold ">
                                        {utente.address.address}
                                    </p>
                                    </td>
                                    <td className="p-4">
                                    <p className="text-sm font-semibold ">
                                        {utente.gender}
                                    </p>
                                    </td>
                                    <td className="p-4">
                                    <p className="text-sm font-semibold ">
                                        {utente.university}
                                    </p>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;