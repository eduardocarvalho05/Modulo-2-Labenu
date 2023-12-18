import React from 'react'
import { CardContainer } from './CardStyled'

export const Card = (props) => {
    // console.log(props)
    const { img, name, species, id } = props
    const { removerPersonagem } = props
    const { changePage } = props

    return (
        <CardContainer>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{species}</p>
            <button onClick={() => changePage("detailspage", id)}>Detalhes</button>
            <button onClick={() => removerPersonagem(id)}>Remover</button>
        </CardContainer >
    )
}
