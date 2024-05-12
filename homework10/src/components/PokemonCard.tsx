import { useEffect, useState } from "react";

import classes from "./styles/PokemonCard.module.css";

import { Pokemon } from "../types/typs";

export default function PokemonCards({
  name,
  url,
  onSelect,
}: {
  name: string;
  url: string;
  onSelect: (name: string) => void;
}) {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    (async function () {
      const response = await fetch(url);
      const result = (await response.json()) as Pokemon;

      setPokemon(result);
    })();
  }, [url]);

  if (!pokemon) {
    return null;
  }

  const firstType = pokemon.types[0].type.name;

  return (
    <li
      className={`${classes.item} ${classes[firstType]}`}
      onClick={() => onSelect(name)}
      data-first-type={firstType}
    >
      <section>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={name}
        />
        <div>{name}</div>
      </section>
    </li>
  );
}
