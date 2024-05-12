import classes from "./styles/PokemonCards.module.css";

import { PokemonListTargetResponse } from "../types/typs";
import PokemonCard from "./PokemonCard";

export default function PokemonCards({
  pokemons,
  onSelect,
}: {
  pokemons: PokemonListTargetResponse[];
  onSelect: (name: string) => void;
}) {
  return (
    <ul className={classes.lists}>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
