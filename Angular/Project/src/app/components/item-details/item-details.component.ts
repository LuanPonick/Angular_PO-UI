import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css', './../../app.component.css']
})
export class ItemDetailsComponent {
  animal ? : Animal;
  cabecalho : string = "ActiveRouter/Router dinamico";
  constructor(private listservice : ListService, private route : ActivatedRoute){
    this.getAnimal();
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listservice.getItem(id).subscribe((value)=>this.animal = value);
  }
}
