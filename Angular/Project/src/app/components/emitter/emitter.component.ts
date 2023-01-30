import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css', './../../app.component.css']
})
export class EmitterComponent {
  cabecalho = 'Emitindo eventos angular';

  valor : number = 0;
  onChangeNumber(){
      this.valor = Math.floor(Math.random() * 10);
  }
}
