function Usuario(props){
    if (props.autenticado ===true) {
        return(
           <> <h2>Bem vindo usuário</h2>
           </>
        )
    }else {
        return null
    }
}
export default Usuario


