import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css','./../../app.component.css']
})
export class ParentDataComponent {
  cabecalho : string = "parent";

  @Input() name:string = '';
  @Input() userData! : {email :String , role:String};
}
