import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // variables
  timeout: any;

  // getting the data
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/webris.json');

    req.onload = () => {
      const rows = JSON.parse(req.response);

      for (const row of rows) {
        row.height = Math.floor(Math.random() * 80) + 50;
      }

      cb(rows);
    };

    req.send();
  }
}
