function ListaNomes(){
    const nomes = ['Adrielle', 'Jailson', 'Ana', 'Lucas'];
  
    return (
      <ul>{nomes.map((nome)=>(<li>{nome}</li>))}</ul>
    )
  }
  export default ListaNomes