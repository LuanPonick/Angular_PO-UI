import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css','./../../app.component.css']
})
export class FirstComponentComponent {
  cabecalho : string = "Primeiro componente criado"

  nome = 'luan';
  constructor(){}
  ngOninit():void{}
}
