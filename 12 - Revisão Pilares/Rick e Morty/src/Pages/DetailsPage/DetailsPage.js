import React from 'react'
import { Header } from '../../Componentes/Header/Header'
import styled from 'styled-components'

export const DetailsPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px;
  gap: 60px;  

  button{
    padding: 10px 30px;
  }
`

export const DetailsPage = (props) => {

  const { characters, id, changePage } = props

  const [character] = characters.filter(char => char.id === id)

  const handleVoltar = () => {
    changePage("homepage"); // Chame a função changePage com "homepage" ao clicar no botão "Voltar"
  }
  return (
    <>
      <Header />
      <DetailsPageContainer>
        <h2>{character.name}</h2>
        <img src={character.image} alt="" />
        <p>{character.species}</p>
        <button onClick={handleVoltar}>voltar</button>
      </DetailsPageContainer>
    </>
  )
}
