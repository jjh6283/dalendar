import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GoalsPageComponent } from './goals-page/goals-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarPageComponent, GoalsPageComponent, HomePageComponent, NavbarComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dalendar';
  hideHome: boolean = false;
}
