import React from "react";
import Garagem from "./Componentes/Garagem";
import "./styles.css";
import "./app.css"

export default function App() {
  const nome1 = "Garagem do Eduardo"
  const nome2 = "Garagem da Gabi"

  function apresentarGaragem(mensagem) {
    alert(mensagem);
  }

  const carros = [
    {
      nome: "Gol",
      cor: "verde",
      ano: 2013,
      isFlex: true
    },
    {
      nome: "Fusca",
      cor: "Branco",
      ano: 2003,
      isFlex: false
    },
    {
      nome: "Jeep",
      cor: "verde",
      ano: 2023,
      isFlex: true
    },
    {
      nome: "HB20",
      cor: "azul",
      ano: 2010,
      isFlex: true
    },
  ]

  return (
    <main>
      <div>
        <Garagem
          nome={nome1}
          apresentarGaragem={apresentarGaragem}
          carros={[carros[0], carros[1]]} // Passando Gol e Fusca
        />

        <Garagem
          nome={nome2}
          apresentarGaragem={apresentarGaragem}
          carros={[carros[2], carros[3]]}
        />
      </div>
    </main>
  );
}


