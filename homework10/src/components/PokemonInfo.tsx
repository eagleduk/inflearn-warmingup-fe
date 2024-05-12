import { useEffect, useState } from "react";

import classes from "./styles/PokemonInfo.module.css";

import { Pokemon, Pokemon_Species } from "../types/typs";

export default function PokemonInfo({
  onBack,
  name,
}: {
  onBack: () => void;
  name: string;
}) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [species, setSpecies] = useState<Pokemon_Species>();

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = (await response.json()) as Pokemon;

      setPokemon(result);
    })();

    (async function () {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );
      const result = (await response.json()) as Pokemon_Species;

      setSpecies(result);
    })();
  }, [name]);

  if (!pokemon) {
    return <h1>Loading...</h1>;
  }

  const description = species?.flavor_text_entries.filter((species) => {
    return (
      species.version.name.toUpperCase() === "X" &&
      species.language.name.toUpperCase() === "KO"
    );
  })[0]?.flavor_text;

  return (
    <div className={classes.content}>
      <div className={classes.content__header}>
        <button onClick={onBack}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </div>

      <div className={classes.content__main}>
        <div>
          <h1>{name}</h1>
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            width={"300px"}
            alt={name}
          />

          <div className={classes.content__target__type}>
            {pokemon.types.map(({ type }) => (
              <span key={type.name} className={classes[type.name]}>
                {type.name}
              </span>
            ))}
          </div>
          <div className={classes.content__target__information}>
            <div>
              <label>WEIGHT</label>
              <label>HEIGHT</label>
              <label>ABILITY</label>
            </div>
            <div>
              <label>{pokemon.weight}</label>
              <label>{pokemon.height}</label>
              <label>
                {pokemon.abilities.map(({ ability: { name } }) => (
                  <p key={name}>{name}</p>
                ))}
              </label>
            </div>
          </div>
          <div className={classes.content__target__stats}>
            {pokemon.stats.map(({ base_stat, stat }) => {
              return (
                <div key={stat.name}>
                  <p>{stat.name}</p>
                  <progress value={base_stat} max={100} />
                </div>
              );
            })}
          </div>
          <div className={classes.content__target__description}>
            <h2>설명</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
