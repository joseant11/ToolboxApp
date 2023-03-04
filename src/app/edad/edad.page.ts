import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-edad',
  templateUrl: 'edad.page.html',
  styleUrls: ['edad.page.scss'],
})
export class EdadPage {
  name: string = '';
  age: number = 0;
  status: string = '';
  icon: string = '';

  constructor() {}

  calculateAge() {
    axios
      .get(`https://api.agify.io/?name=${this.name}`)
      .then((response) => {
        this.age = response.data.age;

        if (this.age < 18) {
          this.status = 'Joven';
          this.icon = 'child';
        } else if (this.age >= 18 && this.age <= 65) {
          this.status = 'Adulto';
          this.icon = 'person';
        } else {
          this.status = 'Anciano';
          this.icon = 'person-outline';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}