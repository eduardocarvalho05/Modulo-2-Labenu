import { Carro } from "../Carro//Carro";
import { GaragemContainer, Estacionamento } from "./styledGaragem";

export function Garagem(props) {
  return (
    <GaragemContainer>

      <Estacionamento>
        <h1>GARAGEM CARROS</h1>
        <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={true} />
      </Estacionamento>
      <Estacionamento>
        <h1>GARAGEM MOTOS</h1>
        <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={true} />
      </Estacionamento>
    </GaragemContainer>
  );
}
