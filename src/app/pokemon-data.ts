import {PokemonDataItem} from "./pokemon-data-item";

export interface PokemonData {
    count: number;
    next: string;
    previous: string;
    results: Array<PokemonDataItem>;
}