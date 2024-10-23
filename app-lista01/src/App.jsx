
import Saudacao from './components/Saudacao'
import Ola from './components/Ola'
import Usuario from './components/Usuario'
import './app.css'
import Estudante from './components/Estudante'
import Idade from './components/Idade'
import CalculoNota from './components/CalculoNota'
import Desconto from './components/Desconto'
import Online from './components/Online'
import Logado from './components/Logado'
import Nivel from './components/Nivel'


function App() {
  return (
    <div>
     <Saudacao/>
      <Ola identidade=" Ananao" /> 
      <Usuario autenticado={true}/>
      <Estudante estudantes={true} />
      <Idade idade={true}/>
      <CalculoNota nota="90"/>
      <Desconto temDesconto ={true}/>
      <Online online={true}/>
      <Logado logar={false} />
      <Nivel grau = "iniciante"/>
     

    </div>
  )
}

export default App

