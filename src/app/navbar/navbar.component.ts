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

  getGenerationByRegion(genID: number) {
    console.log('genID vale: ', genID);
    let limit = 10000;
    let offset = 0;
    // @ts-ignore
    if(genID === -1){
      this.pss.getAll(offset, limit).subscribe( (res: Response) => {
        // @ts-ignore
        this.pokemonList = res.results;
        // @ts-ignore
        console.log('pokemon :', res);
      });
    }
    else {
      this.pss.getGeneration(genID).subscribe((res: Response) => {
        // @ts-ignore
        this.pokemonList = res.results;
        // @ts-ignore
        console.log('pokemon :', res);
      });
    }
  }

  getGenerations() {
    this.pss.getGenerations().subscribe( (res: Response) => {
      // @ts-ignore
      this.generationsList = res.results;
      // @ts-ignore
      console.log('pokemon :', res);
    });
  }
}
