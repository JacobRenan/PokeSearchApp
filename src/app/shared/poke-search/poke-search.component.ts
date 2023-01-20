import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void{
  }

  public search(value: string){
    this.emitSearch.emit(value);
  }
}
