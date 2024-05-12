import { useEffect, useState } from "react";

import classes from "./App.module.css";

import { PokemonListResponse, PokemonListTargetResponse } from "./types/typs";
import PokemonCards from "./components/PokemonCards";
import PokemonInfo from "./components/PokemonInfo";
import Modal from "./components/ui/Modal";

const LIMIT = 20;

async function getPokemonLists(url: string) {
  const response = await fetch(url);

  const results = (await response.json()) as PokemonListResponse;
  return results;
}

function App() {
  const [selected, setSelected] = useState<null | string>(null);
  const [keyword, setKeyword] = useState("");

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

  const filteredPokemon = pokemons.filter(
    (pokemon) => pokemon.name.indexOf(keyword) > -1
  );

  return (
    <div className={classes.App}>
      <Modal isOpen={Boolean(selected)} onClose={handleRemoveSelectedPokemon}>
        {selected ? (
          <PokemonInfo onBack={handleRemoveSelectedPokemon} name={selected} />
        ) : (
          <></>
        )}
      </Modal>
      <div>
        <input
          type="text"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Input Pokemon Name"
        />
      </div>
      <PokemonCards pokemons={filteredPokemon} onSelect={handleSelectPokemon} />
      {next && <button onClick={handleNextEvent}>Next</button>}
    </div>
  );
}

export default App;
