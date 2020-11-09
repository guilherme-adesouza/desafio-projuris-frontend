import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ApiConstants } from '../constants/api-constants';
import { Pokemon } from "./pokemon";
import { MessageService } from "../message.service";
import { PokemonData } from "./pokemon-data";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonsUrl = 'pokemon';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
      private http: HttpClient,
      private messageService: MessageService) {

  }

  /** GET heroes from the server */
  async getPokemons(): Promise<Array<Pokemon>> {
    const data: PokemonData = await this.http
        .get<PokemonData>(ApiConstants.API_ENDPOINT + this.pokemonsUrl)
        .toPromise();
    let pokemons: Array<Pokemon> = [];
    for (let pokeData of data.results) {
      const pokemonData = await this.getPokemonData(pokeData);
      pokemons.push({
        id: pokemonData.id,
        name: pokemonData.name,
        order: pokemonData.order,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`,
        types: pokemonData.types.map(t => {
          return {name: t.type.name}
        })
      });
    }
    return pokemons;
  }

  async getPokemonData({url}) {
    return await this.http
        .get<any>(url)
        .toPromise();
  }

}
