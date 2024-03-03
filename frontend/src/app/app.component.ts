import { Component } from '@angular/core';
import { RecommendationService } from '../../src/app/services/recommendation.service';
import { ReccomendationResponse } from './home-page/home-page/home-page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rec: string = 'pending...';
  phase: string = "Follicular Phase";
  goal: string = 'something';

  constructor (private recService: RecommendationService) {}

  title = 'dalendar';
  hideWelcome: boolean = false;
  hideGeneral: boolean = true;
  hideHome: boolean = true;
  hideGoals: boolean = true;
  hideFitness: boolean = true;
  hideNutr: boolean = true;
  hideProd: boolean = true;
  hideCalendar: boolean = true

  navigateTo(location: string) {
    switch (location) {
      case 'general':
        this.hideGeneral = false;
        this.hideWelcome = true;
        this.hideHome = true;
        this.hideGoals = true;
        this.hideFitness = true;
        this.hideNutr = true;
        this.hideProd = true;
        this.hideCalendar = true
        break;
      case 'productivity':
        this.hideProd = false;
        this.hideGeneral = true;
        this.hideWelcome = true;
        this.hideHome = true;
        this.hideGoals = true;
        this.hideFitness = true;
        this.hideNutr = true;
        this.hideCalendar = true
        break;
      case 'fitness':
        this.hideFitness = false;
        this.hideProd = true;
        this.hideGeneral = true;
        this.hideWelcome = true;
        this.hideHome = true;
        this.hideGoals = true;
        this.hideNutr = true;
        this.hideCalendar = true
        break;
      case 'goals': 
        this.hideGoals = false;
        this.hideFitness = true;
        this.hideProd = true;
        this.hideGeneral = true;
        this.hideWelcome = true;
        this.hideHome = true;
        this.hideNutr = true;
        this.hideCalendar = true
        break;
      case 'home': 
        this.hideHome = false;
        this.hideGoals = true;
        this.hideFitness = true;
        this.hideProd = true;
        this.hideGeneral = true;
        this.hideWelcome = true;
        this.hideNutr = true;
        this.hideCalendar = true
        break;
      case 'nutrition':
        this.hideNutr = false;
        this.hideGoals = true;
        this.hideFitness = true;
        this.hideProd = true;
        this.hideGeneral = true;
        this.hideWelcome = true;
        this.hideHome = true;
        this.hideCalendar = true
        break;
      case 'calendar':
        this.hideCalendar = false;
        this.hideGoals = true;
        this.hideFitness = true;
        this.hideProd = true;
        this.hideGeneral = true;
        this.hideWelcome = true;
        this.hideHome = true;
        this.hideNutr = true;
        break;
      case 'welcome':
        this.hideWelcome = false;
        this.hideGoals = true;
        this.hideFitness = true;
        this.hideProd = true;
        this.hideGeneral = true;
        this.hideHome = true;
        this.hideNutr = true;
        this.hideCalendar = true
        break;
    }
  }

  askGoal(goal: string) {
    console.log(`this is in the askGoal ${goal}`)
    this.goal = goal;
    // this.recService.recommendation().subscribe((data: ReccomendationResponse) => {
    //   console.log(data)
    //   this.rec = data.choices[0]?.message.content;
    // })
  }
}
