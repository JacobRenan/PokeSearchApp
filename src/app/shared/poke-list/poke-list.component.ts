import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private api:PokeApiService){}

  public getAllPokemons: any;
  
  ngOnInit(): void {
    this.api.apiPoke.subscribe(
        res => {
          console.log(this.getAllPokemons);
          this.getAllPokemons = res.results;
          
        })
        
  }

}
