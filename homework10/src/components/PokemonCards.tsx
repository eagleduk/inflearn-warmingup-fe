import { PokemonListTargetResponse } from "../types/typs";
import Card from "./Card";

export default function PokemonCards({
  pokemons,
  onSelect,
}: {
  pokemons: PokemonListTargetResponse[];
  onSelect: (name: string) => void;
}) {
  return (
    <>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}
