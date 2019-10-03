import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private httpClient: HttpClient) {}

  getRegion(offset: number, limit: number) {
    console.log('in getRegion service with offset', offset, ' and limit ', limit);
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
  }

  getGenerations(): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/generation/');
  }


}
