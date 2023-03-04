import { Component } from '@angular/core';
import axios from 'axios';

interface University {
  name: string;
  domains: string[];
  web_pages: string[];
}

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage {

  countryName: string = '';
  universities: University[] = [];

  constructor() {}

  searchUniversities() {
    axios.get(`http://universities.hipolabs.com/search?country=${this.countryName}`)
      .then(response => {
        this.universities = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
