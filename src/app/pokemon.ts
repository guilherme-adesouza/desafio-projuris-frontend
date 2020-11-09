import {PokemonType} from "./pokemon-type";

export interface Pokemon {
    id: number;
    name: string;
    order: number;
    image: string;
    types: Array<PokemonType>;
}