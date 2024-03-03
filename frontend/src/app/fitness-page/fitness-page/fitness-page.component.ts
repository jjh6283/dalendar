import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fitness-page',
  templateUrl: './fitness-page.component.html',
  styleUrls: ['./fitness-page.component.css']
})
export class FitnessPageComponent {
  @Output() valueEmitter = new EventEmitter<string>();
  @Output() optionEmitter = new EventEmitter<string>();
  selection: string = 'gain muscle';

  setSelection(selection: string) {
    console.log(selection);
    this.selection = selection;
  }

  emitNav() {
    console.log(this.selection);
    this.valueEmitter.emit('general');
    this.optionEmitter.emit(this.selection);
  }
}
