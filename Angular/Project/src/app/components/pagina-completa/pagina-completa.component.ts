import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-completa',
  templateUrl: './pagina-completa.component.html',
  styleUrls: ['./pagina-completa.component.css', './../../app.component.css']
})
export class PaginaCompletaComponent {
  componentsWidth = '600';

  title = 'Project';
  userName = "Luan";
  userData = {
    email:'luanponick.sz@gmail.com',
    role: 'Adimn'
  }
  classes = ["verde","italico"]
  color = 'red';
  size = 50;


}
