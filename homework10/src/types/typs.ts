export type PokemonListTargetResponse = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListTargetResponse[];
};

export type Pokemon = {
  height: number;
  id: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: { slot: number; type: PokemonListTargetResponse }[];
  stats: {
    base_stat: string;
    effort: number;
    stat: PokemonListTargetResponse;
  }[];
  abilities: { ability: PokemonListTargetResponse }[];
};

export type Pokemon_Species = {
  flavor_text_entries: {
    flavor_text: string;
    language: PokemonListTargetResponse;
    version: PokemonListTargetResponse;
  }[];
};
