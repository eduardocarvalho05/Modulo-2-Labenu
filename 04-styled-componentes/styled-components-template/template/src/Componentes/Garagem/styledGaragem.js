import styled from "styled-components"

export const GaragemContainer = styled.main`
    display: flex;
    align-items: center;
    gap: 16px; /* Espaçamento entre os estacionamentos */
`

export const Estacionamento = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1; /* Ocupar o espaço disponível igualmente */
    padding: 16px;
    border: 1px solid #ccc;

    li{
        list-style: none;
    }
`
