import './App.css'

import Filho from './components/Filho'
import Highlighted from './components/Highlighted'
import Imagem from './components/Imagem'
import ListaNomes from './components/ListaNomes'
import Tabela from './components/Tabela'
import Pai from './components/Pai'
import ListaKey from './components/ListaKey'
import Card from './components/Card'
import ListaMap from './components/ListaMap'


function App() {  
  return (
    <>
      <Filho />
      <Pai/>
      <ListaNomes />
      <Tabela /> 
      <Imagem />
      <Highlighted isHighlighted ={false} />  
      <ListaKey/>
      <Card/>
      <ListaMap/>

    </>
  )
}

export default App
