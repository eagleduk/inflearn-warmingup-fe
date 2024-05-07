import { useEffect, useState } from "react";
import "./App.css";
import { PokemonListResponse, PokemonListTargetResponse } from "./types/typs";
import Card from "./components/Card";
import PokemonCards from "./components/PokemonCards";

const LIMIT = 20;

async function getPokemonLists(url: string) {
  const response = await fetch(url);

  const results = (await response.json()) as PokemonListResponse;
  return results;
}

function App() {
  const [selected, setSelected] = useState<null | string>(null);

  const [pokemons, setPokemons] = useState<PokemonListTargetResponse[]>([]);
  const [next, setNext] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      const results = await getPokemonLists(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${LIMIT}`
      );
      setPokemons(results.results);
      setNext(results.next);
    })();
  }, []);

  async function handleNextEvent() {
    if (!next) return;
    const results = await getPokemonLists(next);
    setPokemons((current) => [...current, ...results.results]);
    setNext(results.next);
  }

  function handleSelectPokemon(name: string) {
    setSelected(name);
  }
  function handleRemoveSelectedPokemon() {
    setSelected(null);
  }

  if (selected) {
    return (
      <div>
        <button onClick={handleRemoveSelectedPokemon}>back</button>
        <h1>Selected!!</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <div>
        <input type="text" />
      </div>
      <PokemonCards pokemons={pokemons} onSelect={handleSelectPokemon} />
      {next && <button onClick={handleNextEvent}>Next</button>}
    </div>
  );
}

export default App;
