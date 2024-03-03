import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.css']
})
export class GeneralPageComponent {
  @Output() valueEmitter = new EventEmitter<string>();

  emitNavigation() {
    this.valueEmitter.emit('home')
  }
}
