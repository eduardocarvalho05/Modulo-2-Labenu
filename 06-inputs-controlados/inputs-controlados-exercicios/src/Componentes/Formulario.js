import React from "react";
import { StyledFormulario } from './estiloDoFormulario';

const Formulario = (props) => {

    return (
        <StyledFormulario>
            <form>
                <select value={props.formaDePagamento} onChange={props.funcaoPagamento}>
                    <option value="">Selecione</option>
                    <option value="credito">Crédito</option>
                    <option value="debito">Débito</option>
                </select>
                <br />
                <label>
                    Nome:
                    <input type="text" value={props.nomeDoCartao} onChange={props.funcaoNome} placeholder="Nome" />
                </label>
                <br />
                <label>
                    Número do Cartão:
                    <input type="text" value={props.numeroDoCartao} onChange={props.funcaoNumero} placeholder="Número do Cartão" />
                </label>
                <br />
                <label>
                    Data de Validade:
                    <input type="date" value={props.dataDeValidade} onChange={props.funcaoValidade} placeholder="MM/AA" />
                </label>
                <br />
                <label>
                    CVC:
                    <input type="text" value={props.cvc} onChange={props.funcaoCvc} placeholder="CVC" />
                </label>
                <br />
                <button onClick={props.imprimirValoresDosInputs}>Enviar</button>
            </form>
        </StyledFormulario>
    );
};

export default Formulario;









