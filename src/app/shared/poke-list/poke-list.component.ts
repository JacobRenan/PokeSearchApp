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

  public getAllPokemons: any;
  
  ngOnInit(): void {
    this.api.apiListAllPokemons.subscribe(
        res => {
          console.log(this.getAllPokemons);
          this.getAllPokemons = res.results;
          
        })
        
  }

}
