import { Animal } from 'src/app/Animal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals : Animal[] , animal : Animal){
    return animals.filter((a) => animal.name !== a.name);
  }
  create(animals : Animal[]){
    return animals.push({name: `null ${animals.length+1}`,type: "null", age:0})
  }
}
