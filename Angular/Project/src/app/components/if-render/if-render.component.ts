import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css','./../../app.component.css']
})
export class IfRenderComponent {
  cabecalho : string = "if render"

  name = 'luna'
  canShow:boolean = true;
}
