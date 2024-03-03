import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  @Output() valueEmitter = new EventEmitter<string>()
  nav: string = 'fitness';

  setGoal(nav: string) {
    this.nav = nav;
  }

  emitComplete() {
    this.valueEmitter.emit(this.nav);
  }
}
