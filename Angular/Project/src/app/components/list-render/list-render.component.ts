import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css' , './../../app.component.css']
})
export class ListRenderComponent {
  constructor(private listservice : ListService){}
  cabecalho: string = "renderização de lista";

  animals:Animal[] = [
    {name: "TUCA", type: "dog5",age: 4},
    {name: "TUCA2", type: "dog4",age: 4},
    {name: "TUCA3", type: "dog3",age: 4},
    {name: "TUCA4", type: "dog2",age: 4},
    {name: "TUCA5", type: "dog1",age: 4}
    ]

    animal : Animal = {
      name: "TUCA",
      type: "dog5",
      age: 4
    }

    petMensage : string = '';

    showAge(animal : Animal) : void {
      this.petMensage = `O pet ${animal.name} tem ${animal.age} anos`;
    }
    removerAnimal(animal : Animal){
      console.log("Removendo animal");
      this.animals = this.listservice.remove(this.animals,animal);
    }
    createNewAnimal(animals : Animal[]){

    }
}
