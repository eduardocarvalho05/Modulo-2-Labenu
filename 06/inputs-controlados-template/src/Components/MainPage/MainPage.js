import React, { useState } from 'react'; // Importe o useState
import { MainContainer, Form, Input } from './styles';

function MainPage() {
  const [nome, setNome] = useState(""); // Use o useState para inicializar o estado
  const [idade, setIdade] = useState("")
  const [estadoCivil, setEstadoCivil] = useState("");
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const alterarNome = (event) => {
    setNome(event.target.value);
  }

  function alterarIdade(event) {
    setIdade(event.target.value)
  }

  function alterarEmail(event) {
    setEmail(event.target.value)
  }

  function alterarSenha(event) {
    setSenha(event.target.value)
  }

  function imprimirValoresDosInputs(event) {
    event.preventDefault()
    console.log(nome, idade, email, senha, estadoCivil)
    // Resete os valores dos campos para vazio
    setNome("");
    setIdade("");
    setEmail("");
    setSenha("");
    setEstadoCivil("");
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>

        <label>
          Nome:
          <Input value={nome} onChange={alterarNome} placeholder='Escreva seu nome:' />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={alterarIdade} placeholder='Escreva sua idade:' />
        </label>
        <label>
          Email:
          <Input value={email} onChange={alterarEmail} placeholder='Escreva seu email' type='email' />
        </label>
        <label>
          Senha:
          <Input value={senha} onChange={alterarSenha} placeholder='Sua senha:' type='password' />
        </label>
        <label>
          Estado civil:
          <br />
          <select value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)}>
            <option>Nenhum</option>
            <option>Solteira(o)</option>
            <option>Casada(o)</option>
            <option>Viúva(o)</option>
            <option>Divorciada(o)</option>
          </select>
        </label>
        <button onClick={imprimirValoresDosInputs}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;

