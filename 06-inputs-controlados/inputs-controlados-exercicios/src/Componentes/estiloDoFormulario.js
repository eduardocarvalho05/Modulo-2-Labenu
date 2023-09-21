import styled from 'styled-components';

export const StyledFormulario = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  select,
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  select {
    cursor: pointer;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }
`;
