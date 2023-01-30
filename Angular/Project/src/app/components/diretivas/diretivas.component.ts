import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css' ,
              './../../app.component.css']
})
export class DiretivasComponent {
  cabecalho : string = "Teste de direticas"

  @Input() color!:string;
  @Input() size!:number;
  @Input() classesteste!:string[];
}
