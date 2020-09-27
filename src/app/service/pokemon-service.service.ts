import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import Pokedex from "pokedex-promise-v2";

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  pokedex: Pokedex = new Pokedex();
  baseAPIEndpoint: String = "https://pokeapi.co/api/v2/"

  constructor(private httpClient: HttpClient) { }

  getAll(offset: number, limit: number) {
    return this.httpClient.get(`${this.baseAPIEndpoint}pokemon/?limit=${limit}&offset=${offset}`);
  }

  getGeneration(genID: number): Observable<any> {
    return this.httpClient.get(`${this.baseAPIEndpoint}generation/${genID}`);
  }

  getGenerations(): Observable<any> {
    return this.httpClient.get(`${this.baseAPIEndpoint}generation/`);
  }
}
