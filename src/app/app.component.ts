import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  hasValidSession: boolean;
  constructor() {
    this.hasValidSession = true;
  }
}
