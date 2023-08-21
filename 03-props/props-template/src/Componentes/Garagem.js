// Garagem.js
import React from "react";
import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem do {props.nome}</h1>
      <button onClick={() => { props.apresentarGaragem(props.nome) }}>Mostrar Alerta</button>

      {props.carros.map((carro, index) => (
        <Carro
          key={index}
          nome={carro.nome}
          cor={carro.cor}
          ano={carro.ano}
          isFlex={carro.isFlex}
        />
      ))}
    </div>
  );
}

export default Garagem;

