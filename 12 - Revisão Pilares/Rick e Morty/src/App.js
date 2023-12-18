import React, { useEffect, useState } from 'react';
import { HomePage } from './Pages/HomePage/HomePage';
import { GlobalStyle } from './GlobalStyle'; // Importe o estilo global aqui
import { results } from './Data/data';
import { DetailsPage } from './Pages/DetailsPage/DetailsPage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [query, setQuery] = useState("");
  const [orderParam, setOrderParam] = useState("");
  const [page, setPage] = useState("homepage");
  const [id, setId] = useState(0)

  useEffect(() => {
    setCharacters(results)
  }, [])

  const handleInputImage = (event) => setImage(event.target.value);
  const handleInputName = (event) => setName(event.target.value);
  const handleInputSpecies = (event) => setSpecies(event.target.value);
  const handleInputQuery = (event) => setQuery(event.target.value);
  const handleInputOrderParam = (event) => setOrderParam(event.target.value);

  const changePage = (page, id) => {
    setPage(page)
    setId(id)
  };

  const adicionarPersonagem = (event) => {
    event.preventDefault();
    const novoPersonagem = {
      id: Date.now(),
      name: name,
      species: species,
      origin: {
        name: "Earth"
      },
      image: image
    };

    const newCharacterList = [...characters, novoPersonagem];
    setCharacters(newCharacterList);

    setImage("");
    setName("");
    setSpecies("");
  }

  const removerPersonagem = (id) => {
    const updatedCharacterList = characters.filter((character) => character.id !== id);
    setCharacters(updatedCharacterList);
  }

  const renderPage = () => {
    switch (page) {
      case "homepage":
        return <HomePage
          results={characters}
          states={{ image, name, species, query, orderParam }}
          handles={{
            handleInputImage,
            handleInputName,
            handleInputSpecies,
            handleInputQuery,
            handleInputOrderParam
          }}
          adicionarPersonagem={adicionarPersonagem}
          removerPersonagem={removerPersonagem}
          changePage={changePage}
        />
      case "detailspage":
        return <DetailsPage
          characters={characters}
          id={id}
          changePage={changePage}
        />;
      default:
    }
  };


  return (
    <div>
      <GlobalStyle />
      {renderPage()}
    </div>
  );
}

export default App;
