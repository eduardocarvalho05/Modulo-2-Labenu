import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid black;
  margin: 16px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #bdbdbd;
  width: 30%;
  height: 400px;
  img {
    width: 70%; 
    height: 56%;
    border-radius: 2px;
  }
`;

export const PokemonName = styled.h2`
  border-top: 2px solid black;
  padding: 0.5rem 0;
`;

export const PokemonType = styled.p`
  font-weight: bold;
  text-transform: capitalize;
 
`;

export const PokemonBody = styled.p`
  font-weight: bold;
  .altura{
    padding: 6px;
  }
`;

export const EvolveButton = styled.button`
  padding: 0.5rem;
  margin: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 30px -10px #000000;
`;


