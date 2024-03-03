import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nutr-page',
  templateUrl: './nutr-page.component.html',
  styleUrls: ['./nutr-page.component.css']
})
export class NutrPageComponent {
  @Output() valueEmitter = new EventEmitter<string>();

  emitNav(loc: string) {
    this.valueEmitter.emit(loc)
  }
}
