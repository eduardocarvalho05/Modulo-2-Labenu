import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
        
    }
    .titulo-header{
        background-color: orange;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
`;
