import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  rows = [];
  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/webris.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
