import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { WeatherService } from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
  weather;
  
  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    // this.weatherService.getWeather('London', 'uk').subscribe(
    //   datos => { this.weather = datos; console.log(datos);
    //    },
    //   error => { console.log(error); }
    // )
  }
  

  gettWeather(cityName: string, contryCode:string){
    this.weatherService.getWeather(cityName, contryCode).subscribe(
      datos => { this.weather = datos; console.log(datos);
       },
      error => { console.log(error); }
    )
  }

  submitLocation(cityName: HTMLInputElement, contryCode: HTMLInputElement){

    if(cityName.value && contryCode.value){

      this.gettWeather(cityName.value, contryCode.value);
      cityName.value = '';
      contryCode.value = '';
    } else {
      alert('Inserte una ciudad');
    }


    cityName.focus();
    return false;
  }


}
