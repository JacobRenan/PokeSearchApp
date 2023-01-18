import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http:HttpClient) { }

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

 /// o método get é de TS e a vantagem é que não precisa da sintaxe de chamar a função
 // o get<any>(url) puxa todas as informações da url e o .pipe filtra as informações de acordo com a demanda 
 // res.results.map() entra nos results dos dados
 // ao acessar os results, é necessário acessar à nova url para encontrar os dados
 // a nova url é acessada por meio de getPokemons()  
 // resPokemons é um objeto que vai receber todos os resultados da url 
 
  get apiListAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        
        res.results.map((resPokemons:any) =>{
          this.getPokemons(resPokemons.url).subscribe(
            res=> resPokemons.status = res
            )
        })
      })
    )
  }

  public getPokemons(url: string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }
}
