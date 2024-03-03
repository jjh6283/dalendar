import { Component } from '@angular/core';

@Component({
  selector: 'app-goals-page',
  standalone: true,
  imports: [],
  templateUrl: './goals-page.component.html',
  styleUrl: './goals-page.component.css'
})
export class GoalsPageComponent {
  currentTab: string = "general"
  switchTab(newTab : string) {
    this.currentTab = newTab
  }

}
