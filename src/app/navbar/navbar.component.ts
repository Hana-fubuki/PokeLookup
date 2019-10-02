import { Component, OnInit } from '@angular/core';
import {PokemonServiceService} from '../service/pokemon-service.service';
declare var require: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  generationsList: any[] = [];
  pokemonList: any[] = [];
  constructor(private pss: PokemonServiceService) { }

  ngOnInit() {
    this.getGenerations();
  }

  getRegion(genID: number) {
    console.log('genID vale: ', genID);
    let limit = 10000;
    let offset = 0;
    // @ts-ignore
    switch (genID) {
      case -1: {
        break;
      }
      case 0: {
        limit = 151;
        break;
      }
      case 1: {
        limit = 99;
        offset = 152;
        break;
      }
      case 2: {
        offset = 252;
        limit = 134;
        break;
      }
      case 3: {
        offset = 387;
        limit = 106;
        break;
      }
      case 4: {
        offset = 494;
        limit = 155;
        break;
      }
      case 5: {
        offset = 650;
        limit = 71;
        break;
      }
      case 6: {
        offset = 722;
        limit = 87;
        break;
      }
    }
    this.pss.getRegion(offset, limit).subscribe( (res: Response) => {
      // @ts-ignore
      this.pokemonList = res.results;
      // @ts-ignore
      console.log('pokemon :', res);
    });
  }

  getGenerations() {
    this.pss.getGenerations().subscribe( (res: Response) => {
      // @ts-ignore
      this.generationsList = res.results;
      // @ts-ignore
      console.log('Generations :', res.results);
    });
  }
}
