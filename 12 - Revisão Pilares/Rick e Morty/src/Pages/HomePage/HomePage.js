import React, { useState } from 'react';
import { Header } from '../../Componentes/Header/Header';
import { Card } from "../../Componentes/Card/Card";
import { HomePageContainer } from './HomeStyled';

export const HomePage = (props) => {
    const { results } = props;
    const { image, name, species, query, orderParam } = props.states;
    const { handleInputImage, handleInputName, handleInputSpecies, handleInputQuery, handleInputOrderParam } = props.handles;
    const { adicionarPersonagem } = props;
    const { removerPersonagem } = props;
    const { changePage } = props;

    // Função para ordenar a lista com base no parâmetro "orderParam"
    const sortedResults = results.sort((a, b) => {
        if (orderParam === "asc") {
            return a.name.localeCompare(b.name);
        } else if (orderParam === "desc") {
            return b.name.localeCompare(a.name);
        }
        return 0; // Não altera a ordem se "orderParam" for inválido
    });

    const renderList = sortedResults
        .filter(char => query === "" || char.name.toLowerCase().includes(query.toLowerCase()))
        .map(char => (
            <Card
                key={char.id}
                id={char.id}
                img={char.image}
                name={char.name}
                species={char.species}
                removerPersonagem={removerPersonagem}
                changePage={changePage}
            />
        ));

    return (
        <HomePageContainer>
            <Header />

            <form>
                <div className="left-section">
                    <h2>Busca</h2>
                    <input type="text" value={query} onChange={handleInputQuery} />

                    <h2>Ordenar</h2>
                    <select name="" id="" value={orderParam} onChange={handleInputOrderParam}>
                        <option value="asc">Crescente</option>
                        <option value="desc">Decrescente</option>
                    </select>
                </div>

                <div className="right-section">
                    <h2>Criar personagem</h2>
                    <label htmlFor="image">Image:</label>
                    <input type="text" id="image" value={image} onChange={handleInputImage} />

                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" value={name} onChange={handleInputName} />

                    <label htmlFor="species">Espécie:</label>
                    <input type="text" id="species" value={species} onChange={handleInputSpecies} />

                    <button type="button" onClick={adicionarPersonagem}>
                        Criar
                    </button>
                </div>
            </form>

            <main>{renderList}</main>
        </HomePageContainer>
    );
};
