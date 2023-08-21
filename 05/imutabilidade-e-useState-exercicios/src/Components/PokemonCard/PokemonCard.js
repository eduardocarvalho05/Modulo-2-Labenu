// PokemonCard.js
import React from 'react';
import { Card, PokemonName, PokemonType, PokemonBody, EvolveButton } from './styles';

const PokemonCard = (props) => {
  const evoluirPokemon = () => {
    if (props.id === 0 || props.id === 1) {
      props.setPokemon(props.evolucao1);
    } else {
      props.setPokemon(props.evolucao2);
    }
  };

  const resetPokemon = () => {
    if (props.evolui === false) {
      props.setPokemon(props.inicialStart1);
    }
  };

  return (
    <Card color={props.cor}>
      <img src={props.imagem} alt={`Pokemon`} />
      <PokemonName>{props.nome}</PokemonName>
      <PokemonType>{props.tipo}</PokemonType>
      <PokemonBody>
        <p className='altura'>{props.altura}</p>
        <p className='peso'>{props.peso}</p>
      </PokemonBody>
      <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
      <EvolveButton onClick={resetPokemon}>Reset!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;


