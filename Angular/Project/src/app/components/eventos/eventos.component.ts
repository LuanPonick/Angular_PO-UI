import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css','./../../app.component.css']
})
export class EventosComponent {
  cabecalho : string = "testes de eventos"
  show : boolean = false;

  showMensage() : void{
    this.show = !this.show; // togle
  }
}

