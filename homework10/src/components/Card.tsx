import { useEffect, useState } from "react";
import { Pokemon } from "../types/typs";

export default function Card({
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

  return (
    <section onClick={() => onSelect(name)}>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={name}
      />
      <div>{name}</div>
    </section>
  );
}
