import { Animal } from 'src/app/Animal';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http : HttpClient) { }

  remove(animals : Animal[] , animal : Animal){
    return animals.filter((a) => animal.name !== a.name);
  }
  //create(animals : Animal[]){
  //  return animals.push({id: animals.length+2 , name: `null ${animals.length+1}`,type: "null", age:0})
  //}
  //por conta de atualizações da interface essa função nao esta mais funcionando por falta de uma logica melhor.
  getAll() : Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }
  getItem(id : number) : Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}

