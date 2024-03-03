import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prod-page',
  templateUrl: './prod-page.component.html',
  styleUrls: ['./prod-page.component.css']
})
export class ProdPageComponent {
  @Output() valueEmitter = new EventEmitter<string>();

  emitNav() {
    this.valueEmitter.emit('general');
  }
}
