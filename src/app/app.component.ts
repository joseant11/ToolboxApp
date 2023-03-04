import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'male-female' },
    { title: 'Edad', url: '/edad', icon: 'calendar' },
    { title: 'Universidad', url: '/universidades', icon: 'school' },
    { title: 'Clima', url: '/clima', icon: 'thunderstorm' },
    { title: 'Acerca De', url: '/acercade', icon: 'help-circle' },
  ];

  constructor() {}
}
