function CalculoNota(props){
    if(props.nota>= 90){
        return <h1>Excelente</h1>
    }else if(props.nota>=70){
        return <h1>bom</h1>
    }else{
        return <h1>Precisa melhorar</h1>
    }

}
export default CalculoNota