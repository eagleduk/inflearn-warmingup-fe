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
};
