function Nivel(props){
    return props.grau === "iniciante" ? <h1>Bem-vindo, iniciante!</h1> : props.grau === "intermediário" ? <h1>Você está progredindo!</h1> : props.grau === "avançado" ? <h1>Parabéns, especialista!</h1> : null
}
export default Nivel