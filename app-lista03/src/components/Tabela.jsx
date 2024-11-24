function Tabela() {
    const coisas = [
        { id: 1, nome: 'Adriana', idade: 22 },
        { id: 2, nome: 'Jaja', idade: 30 },
        { id: 3, nome: 'Ananao', idade: 25 },
        { id: 4, nome: 'Daniel', idade: 45 },
    ]
    return (
        <>
            <table>
                <colgroup span="4"></colgroup>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
                {coisas.map((coisa) => (
                    <tr>
                        <td>{coisa.id}</td>
                        <td>{coisa.nome}</td>
                        <td>{coisa.idade}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}
export default Tabela