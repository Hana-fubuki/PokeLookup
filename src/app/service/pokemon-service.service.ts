import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex } from "pokedex-promise-v2";

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private httpClient: HttpClient, public pokedex: Pokedex) {
    this.pokedex = new Pokedex();
  }

  getRegion() {
    return this.pokedex.getGenerationsList().then(function(response) {
      console.log(response);
    })
  }

  getGenerations(): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/generation/');
  }


}
