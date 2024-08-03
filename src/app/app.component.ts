import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mobil', url: '/mobil', icon: 'car' },
    { title: 'Merek', url: '/merek', icon: 'grid' },
  ];
  constructor() {}
}
