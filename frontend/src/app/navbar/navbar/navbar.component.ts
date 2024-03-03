import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() valueEmitter = new EventEmitter<string>();

  emitNav(loc: string) {
    this.valueEmitter.emit(loc);
  }
}
