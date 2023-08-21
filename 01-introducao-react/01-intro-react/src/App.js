


import "./App.css"
import logo from "./img/logo.png";


function App() {

  const olaMundo = () => {
    alert("Bem vindo ao mundo do React!")
  }

  return (
    <div className="container-pai">
      <div className="container-filho">
        <h1>Aprenda React na Labenu!</h1>
        
          <div className="div-logo">
            <img className="Logo" img src={logo} alt="Logo" />
          </div>
          <div className="div-link">
            <a href="https://labenu.com.br" target="_blank" rel="noopener noreferrer">
              Site da Labenu
            </a>
          </div>
          <div className="div-button">
            <button onClick={olaMundo}>Clique aqui!</button>
          </div>
        </div>
      </div>
    
  );
}

export default App;
