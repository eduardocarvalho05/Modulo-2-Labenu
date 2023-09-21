import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import Formulario from "../Componentes/Formulario";
import { useState } from "react";



function PaginaDoCartao() {
    //declare os estados aqui
    const [pagamento, setPagamento] = useState("")
    const [nomeDoCartao, setNomeDoCartao] = useState("")
    const [numeroDoCartao, setNumeroDoCartao] = useState("")
    const [dataDeValidade, setDataDeValidade] = useState("")
    const [cvc, setCvc] = useState("")

    //declare as funções de controle de inputs aqui
    const alterarPagamento = (event) => {
        setPagamento(event.target.value)
    }

    // Funções de controle para o campo de nome do cartão
    const alterarNomeDoCartao = (event) => {
        setNomeDoCartao(event.target.value);
    };

    // Funções de controle para o campo de número do cartão
    const alterarNumeroDoCartao = (event) => {
        setNumeroDoCartao(event.target.value);
    };

    // Funções de controle para o campo de data de validade
    const alterarDataDeValidade = (event) => {
        setDataDeValidade(event.target.value);
    };

    // Funções de controle para o campo de CVC
    const alterarCvc = (event) => {
        setCvc(event.target.value);
    };

    function imprimirValoresDosInputs(event) {
        event.preventDefault()
        console.log(pagamento, numeroDoCartao, nomeDoCartao, cvc, dataDeValidade)
        // Resete os valores dos campos para vazio
        setPagamento("");
        setNomeDoCartao("");
        setNumeroDoCartao("");
        setDataDeValidade("");
        setCvc("");
        alert("Dados cadastrados com sucesso!")
    }
    return (
        <LayoutDaPagina>
            {/* Passe as variáveis de estado para o Cartão. Use Props. */}
            <Cartao
                pagamento={pagamento}
                numero={numeroDoCartao}
                nome={nomeDoCartao}
                cvc={cvc}
                validade={dataDeValidade}
            />

            {/* Chame o Componente Formulário Aqui */}
            <Formulario
                formaDePagamento={pagamento}
                nomeDoCartao={nomeDoCartao}
                numeroDoCartao={numeroDoCartao}
                dataDeValidade={dataDeValidade}
                cvc={cvc}
                funcaoPagamento={alterarPagamento}
                funcaoNome={alterarNomeDoCartao}
                funcaoNumero={alterarNumeroDoCartao}
                funcaoValidade={alterarDataDeValidade}
                funcaoCvc={alterarCvc}
                imprimirValoresDosInputs={imprimirValoresDosInputs}
            />
            {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}

        </LayoutDaPagina>

    );
}

export default PaginaDoCartao;
