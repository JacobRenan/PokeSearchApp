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
  public name: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
    ){}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){

    const id = this.activeRoute.snapshot.params['id'];
    let name = this.pokeApiService.getPokemons(`${this.urlName}/${id}`);
    let pokemon = this.pokeApiService.getPokemons(`${this.urlPokemon}/${id}`);
    
    return forkJoin([pokemon, name]).subscribe(
      ([res1, res2]) => {
        this.pokemon = res1;
        this.name = res2;
        this.isLoading = true;
      },
      (err) => {
        this.apiError = true;
      }
    );
  }
}
