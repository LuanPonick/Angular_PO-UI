import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css','./../../app.component.css']
})
export class TwoWayBindingComponent {
  cabecalho : string = "two ways alegria";
  name : string = '';
}
