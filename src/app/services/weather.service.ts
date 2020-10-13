import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  uri: string = '';
  apiKey = 'tu-api-key'

  constructor( private htttCliente: HttpClient) { 
    this.uri = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, contryCode: string){
     return this.htttCliente.get(`${this.uri}${cityName},${contryCode}`);
  }

}
