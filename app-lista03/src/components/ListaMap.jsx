function ListaMap() {

    const nomes = [
        "Adrielle Merces",
        "Ana Merces",
        "Nataly Merces",
        "Adriano Merces",
        "Keyla Merces"
    ]

    const listItens = nomes.map(item =>
        <li>{item}</li>
    )

    return(
        <ul>
            {listItens}
        </ul>
    )
}

export default ListaMap