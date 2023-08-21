import React from "react";

function Carro(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.isFlex ? "Sim" : "Não"}</li>
      </ul>
    </div>
  );
}

export default Carro;

