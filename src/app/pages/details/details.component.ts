import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon";
  private urlName: string = "https://pokeapi.co/api/v2/pokemon-species";

  public pokemon: any;
  public isLoading: boolean = true;

  public apiError: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService:PokeApiService
    ){}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(){
    const pokemon = this.pokeApiService.getPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.getPokemons(`${this.urlName}/${name}`);
    const id=this.activeRoute.snapshot.params['id'];

    forkJoin([pokemon, name]).subscribe(
      res => {
          this.pokemon = res;
          this.isLoading = true;
      },
      error => {
        this.apiError=true;
      }
    )

    return 
  }
}
