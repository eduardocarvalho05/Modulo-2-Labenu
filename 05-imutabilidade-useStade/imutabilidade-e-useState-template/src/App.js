import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {
  //Criando um estado chamado nome
  const [nome, setNome] = useState("Edu")
  //Criando um estado automóvel para guardar infos do carro
  const [automovel, setAutomovel] = useState({
    modelo: "Fusca",
    cor: "Azul",
    ano: 1993,
    flex: true,
    adicionadoPor: "Labenu"
  })
  //criei um estado index para utilizar na função alterarCarro
  const [index, setIndex] = useState(0);

  const carro1 = {
    modelo: "Gol",
    cor: "Preto",
    ano: 2014,
    flex: false,
    adicionadoPor: "Pirulito"
  };

  const carro2 = {
    modelo: "C3",
    cor: "Branco",
    ano: 2020,
    flex: true,
    adicionadoPor: "Tiago"
  };

  const carro3 = {
    modelo: "Ka",
    cor: "Vermelho",
    ano: 2018,
    flex: true,
    adicionadoPor: "André"
  };

  const carros = [];

  carros.push(carro1, carro2, carro3);
  console.log(carros)

  const alterarCarro = (array) => {
    if (index > 0 && index < 3) {
      setIndex(index + 1);
      setAutomovel(array[index]);
    } else if (index === 0) {
      setAutomovel(array[0]);
      setIndex(index + 1);
    } else {
      setAutomovel({
        ...automovel,
        modelo: "Acabaram os carros",
        cor: "",
        ano: "",
        flex: ""
      });
    }
  };

  const reiniciarCarros = () => {
    setAutomovel({
      modelo: "Fusca",
      cor: "Azul",
      ano: 1970,
      flex: false,
      adicionadoPor: "Ana"
    });
    setIndex(0);
  };

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} automovel={automovel} setNome={setNome} />
      <button
        onClick={() => {
          alterarCarro(carros);
        }}
      >
        Próximo carro
      </button>
      <button onClick={reiniciarCarros}>Começar novamente</button>
    </div>
  );
}
