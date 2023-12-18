import styled from "styled-components";

export const HomePageContainer = styled.div`
    form {
        display: flex;
        justify-content: space-between; // Divide o espaço igualmente entre os filhos
        max-width: 40%;
        margin: auto;
        padding-top: 26px;

        .left-section {
            flex: 1; // A primeira divisão ocupará 1/2 do espaço
            display: flex;
            flex-direction: column;
            align-items: center; // Alinha à esquerda
        }

        .right-section {
            flex: 1; // A segunda divisão ocupará 1/2 do espaço
            display: flex;
            flex-direction: column;
            align-items: center; // Alinha à esquerda
        }

        input {
            width: 200px;
        }

        button {
            margin-top: 5px;
            padding: 0 26px;
        }
    }

    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
`;
