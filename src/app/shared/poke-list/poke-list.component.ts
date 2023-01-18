import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  // no constructor é feita uma injeção de dependencia do service
  // para que ela busque os valores necessários, a função subscribe() é chamada dentro de ngOnInit
  
  constructor(private api:PokeApiService){}

  public apiError: boolean = false;
  private setAllPokemons: any;
  public getAllPokemons: any;
  
  ngOnInit(): void {
    this.api.apiListAllPokemons.subscribe(
        res => {
          this.setAllPokemons = res.results
          this.getAllPokemons = this.setAllPokemons;
          
        },
        error=> {this.apiError = true})
        
  }

  public getSearch(value:string){
    const filter = this.setAllPokemons.filter((res:any ) => {
      return !res.name.indexOf(value.toLocaleLowerCase())
    })    

    this.getAllPokemons=filter
  }

}
