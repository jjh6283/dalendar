import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fitness-page',
  templateUrl: './fitness-page.component.html',
  styleUrls: ['./fitness-page.component.css']
})
export class FitnessPageComponent {
  @Output() valueEmitter = new EventEmitter<string>();

  emitNav() {
    this.valueEmitter.emit('general');
  }
}
