import { GlobalStyle } from "./GlobalStyle";
import { Garagem } from "./Componentes/Garagem/Garagem";


export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1 className="titulo-header">GARAGEM DA LABENU</h1>

        <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
      </div>
    </>
  );
}