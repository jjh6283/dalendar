import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dalendar';
  hideHome: boolean = false;
  hideGoals: boolean = true;
  hideForm: boolean = false;
}
