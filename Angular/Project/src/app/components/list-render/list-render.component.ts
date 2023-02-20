import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css' , './../../app.component.css']
})
export class ListRenderComponent {
  animals:Animal[] = [];
  constructor(private listservice : ListService){
    this.getAnimals();
  } 
  getAnimals(): void{
    this.listservice.getAll().subscribe((animals)=>this.animals = animals);
  }
  cabecalho: string = "renderização de lista";  
  petMensage : string = '';
  showAge(animal : Animal) : void {
    this.petMensage = `O pet ${animal.name} tem ${animal.age} anos`;
  }
  removerAnimal(animal : Animal){
    console.log("Removendo animal");
    this.animals = this.listservice.remove(this.animals,animal);
  }
  createNewAnimal(animals : Animal[]){
    this.listservice.create(animals);
  }
}

