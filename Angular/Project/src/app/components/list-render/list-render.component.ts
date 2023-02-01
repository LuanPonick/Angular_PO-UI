import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css' , './../../app.component.css']
})
export class ListRenderComponent {
  cabecalho: string = "renderização de lista";

  animals =[
    {name: "TUCA", tipe: "dog5"},
    {name: "TUCA2", tipe: "dog4"},
    {name: "TUCA3", tipe: "dog3"},
    {name: "TUCA4", tipe: "dog2"},
    {name: "TUCA5", tipe: "dog1"}
    ]
}
