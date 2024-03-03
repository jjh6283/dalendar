import { Component } from '@angular/core';

@Component({
  selector: 'app-goals-page',
  templateUrl: './goals-page.component.html',
  styleUrls: ['./goals-page.component.css']
})
export class GoalsPageComponent {
  currentTab: string = "general"
  switchTab(newTab : string) {
    this.currentTab = newTab
  }
}
