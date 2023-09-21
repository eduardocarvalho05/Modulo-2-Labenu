// App.js
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import Pichu from "./img/Pichu.gif";
import Pikachu from "./img/Pikachu.gif";
import Raichu from "./img/Raichu.gif";
import Charmander from "./img/Charmander.gif"
import Chameleon from "./img/Charmeleon.gif"
import Charizard from "./img/Charizard.gif"
import Squirtle from "./img/Squirtle.gif"
import Wartortle from "./img/Wartortle.gif"
import Blastoise from "./img/Blastoise.gif"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-wrap: wrap;
`;

function App() {
  const initialStatePichu = {
    nome: "Pichu",
    tipo: "Tipo: Elétrico",
    altura: "Altura: 0.3 m",
    peso: "Peso: 2.0 kg",
    cor: "yellow",
    imagem: Pichu,
    id: 0,
    evolui: true,
    estadoOriginal: true,
  };

  const initialStateCharmander = {
    nome: "Charmander",
    tipo: "Tipo: Fogo",
    altura: "Altura: 0.6 m",
    peso: "Peso: 8.5kg",
    cor: "orange",
    imagem: Charmander,
    id: 1,
    evolui: true,
    estadoOriginal: true,
  };

  const [pichu, setPichu] = useState(initialStatePichu);
  const [charmander, setCharmander] = useState(initialStateCharmander);

  const inicialStart = [
    {
      nome: "Pichu",
      tipo: "Tipo: Elétrico",
      altura: "Altura: 0.3 m",
      peso: "Peso: 2.0 kg",
      cor: "yellow",
      imagem: Pichu,
      id: 0,
      evolui: true,
      estadoOriginal: true,
    },
    {
      nome: "Charmander",
      tipo: "Tipo: Fogo",
      altura: "Altura: 0.6 m",
      peso: "Peso: 8.5kg",
      cor: "orange",
      imagem: Charmander,
      id: 1,
      evolui: true,
      estadoOriginal: true,
    }
  ];

  const evolucao = [
    {
      nome: "Pikachu",
      tipo: "Tipo: Elétrico",
      altura: "Altura: 6.0 m",
      peso: "Peso: 20.0 kg",
      cor: "rgb(255, 223, 0)",
      imagem: Pikachu,
      id: 2,
      evolui: false,
    },
    {
      nome: "Raichu",
      tipo: "Tipo: Elétrico",
      altura: "Altura: 0.8 m",
      peso: "Peso: 30.0 kg",
      cor: "orange",
      imagem: Raichu,
      id: 3,
      evolui: false
    },
    {
      nome: "Charmeleon",
      tipo: "Tipo: Fogo",
      altura: "Altura: 1.1 m",
      peso: "Peso: 19.0 kg",
      cor: "orangered",
      imagem: Chameleon,
      id: 4,
      evolui: false
    },
    {
      nome: "Charizard",
      tipo: "Tipo: Fogo",
      altura: "Altura: 1.7 m",
      peso: "Peso: 90.5 kg",
      cor: "red",
      imagem: Charizard,
      id: 5,
      evolui: false
    }
  ];

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <PokemonCard
          inicialStart1={inicialStart[0]}
          id={pichu.id}
          nome={pichu.nome}
          tipo={pichu.tipo}
          evolui={pichu.evolui}
          altura={pichu.altura}
          peso={pichu.peso}
          cor={pichu.cor}
          imagem={pichu.imagem}
          evolucao1={evolucao[0]}
          evolucao2={evolucao[1]}
          setPokemon={setPichu}
        />
        <PokemonCard
          inicialStart1={inicialStart[1]}
          id={charmander.id}
          nome={charmander.nome}
          tipo={charmander.tipo}
          evolui={charmander.evolui}
          altura={charmander.altura}
          peso={charmander.peso}
          cor={charmander.cor}
          imagem={charmander.imagem}
          evolucao1={evolucao[2]}
          evolucao2={evolucao[3]}
          setPokemon={setCharmander}
        />
      </FlexContainer>
    </>
  );
}

export default App;
