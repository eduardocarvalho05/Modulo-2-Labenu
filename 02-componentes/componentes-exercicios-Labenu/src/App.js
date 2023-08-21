import React from "react";
import "./styles.css";
import "./componentes/CardVideo.js"
import CardVideo from "./componentes/CardVideo.js";

export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              {/* <img src="https://picsum.photos/400/400?a=1 " alt="" /> */}
              <CardVideo />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              {/* <img src="https://picsum.photos/400/400?a=2 " alt="" /> */}
              <CardVideo />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              {/* <img src="https://picsum.photos/400/400?a=3 " alt="" /> */}
              <CardVideo />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              {/* <img src="https://picsum.photos/400/400?a=4 " alt="" /> */}
              <CardVideo />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              {/* <img src="https://picsum.photos/400/400?a=5 " alt="" /> */}
              <CardVideo />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              {/* <img src="https://picsum.photos/400/400?a=6 " alt="" /> */}
              <CardVideo />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              {/* <img src="https://picsum.photos/400/400?a=7 " alt="" /> */}
              <CardVideo />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              {/* <img src="https://picsum.photos/400/400?a=8 " alt="" /> */}
              <CardVideo />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
