import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from "../pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Array<Pokemon>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  async getPokemons(): Promise<void> {
    this.pokemons = await this.pokemonService.getPokemons();
  }

}
