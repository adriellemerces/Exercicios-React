import "./App.css";

//import Personalizar from './components/Personalizar'
// import Herarquia from './components/Herarquia'
import Lista from "./components/Lista";
import Paragrafo from "./components/Paragrafo";
import Mundo from "./components/Mundo";
import Imagem from "./components/Imagem";
import Botao from "./components/Botao";
import Link from "./components/Link";
import TituloSubtitulo from "./components/TituloSubtitulo";
import NoiteDia from "./components/NoiteDia";
import Inline from "./components/Inline";
import Fragmentos from "./components/Fragmentos";

function App() {
  return (
    <>
      <Botao />
      <Mundo />
      <Paragrafo />
      <Lista />
      <Imagem />
      <Link />
      <TituloSubtitulo/>
      <NoiteDia escolha="true" /> 
      <Inline/>
      <Fragmentos/>
    </>
  );
}

export default App;
