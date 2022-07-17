import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  activePage: string = 'dashboard';

  setActive(activePage: string) {
    this.activePage = activePage;
  }
}
