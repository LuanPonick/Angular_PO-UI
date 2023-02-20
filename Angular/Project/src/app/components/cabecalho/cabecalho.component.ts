import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  @Input() cabecalho!:string;
  @Input() maxWitdh:string = "500";
  @Input() marginMop:string = "0";
  @Input() maxWitdhMedida:string = "px";
}
