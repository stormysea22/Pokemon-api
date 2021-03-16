import PokemonList from './components/PokemonList';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [pokemon,setPokemon] = useState([])

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon')
    //         .then(res => res.json())
    //         .then(response => setPokemon(response.results))
    // }, [])

  const getPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(res => res.json())
      .then(res => setPokemon(res.results))
      .catch(err => console.log(err))
    // clicked ? setClicked(false) : setClicked(true);
  };

  return (
    <div className="App">
      <div>
        <button onClick={getPokemonList}>Click for Pokemon List</button>
      </div>
      <div>
        {
          pokemon.map((p, i) => <PokemonList
            name={p.name}
            key={i}
            idx={i}
        />)
        }

      </div>
    </div>
  );
}

export default App;
