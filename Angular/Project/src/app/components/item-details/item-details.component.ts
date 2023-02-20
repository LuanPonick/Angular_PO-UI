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
  constructor(private listservice : ListService, private route : ActivatedRoute){
    this.getAnimal();
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    //parado em 7:08
  }
}
