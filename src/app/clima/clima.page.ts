import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage {
  temperature: number = 0;
  wind: number = 0;
  humidity: number = 0;
  weatherIcon: string = '';

  constructor() {
    this.getWeatherData();
  }

  async getWeatherData() {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,DO&units=metric&appid=a0d68865a0dcb923519a76e3d99ea89e');
    const weatherData = response.data;
    this.temperature = weatherData.main.temp;
    this.wind = weatherData.wind.speed;
    this.humidity = weatherData.main.humidity;
    this.weatherIcon = `weather-${weatherData.weather[0].icon}`;
  }

}