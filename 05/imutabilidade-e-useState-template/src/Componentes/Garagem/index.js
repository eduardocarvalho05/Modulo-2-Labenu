import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome, automovel, setNome }) {

  const alterarNome = () => {
    setNome("Apollo")
  }

  return (
    <GaragemContainer>
      <h1>Garagem do {nome}</h1>
      <Botao onClick={alterarNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex={automovel.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
