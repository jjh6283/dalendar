import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { GoalsPageComponent } from './goals-page/goals-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarPageComponent, FormComponentComponent, GoalsPageComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dalendar';
}
