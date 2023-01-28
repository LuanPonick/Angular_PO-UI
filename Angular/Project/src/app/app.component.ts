import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
