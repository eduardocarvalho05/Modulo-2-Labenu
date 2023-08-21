import { CarroStyle } from "./styledCarro"

export function Carro(props) {
  return (
    <CarroStyle>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado: {props.adicionadoPor}</li>
      </ul>
    </CarroStyle>
  );
}

