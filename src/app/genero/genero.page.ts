import { Component } from '@angular/core';
import axios from 'axios';

interface GenderData {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage {
  nombre: string= '';
  genero: string= '';

  async predecirGenero() {
    try {
      const response = await axios.get(`https://api.genderize.io?name=${this.nombre}`);
      this.genero = response.data.gender;
    } catch (error) {
      console.error(error);
    }
  }
}