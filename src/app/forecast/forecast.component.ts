import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Forecast } from './forecast';
import { ForecastService } from './forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  items$: Observable<Forecast[]> = of([]);

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.getForecast();
  }

  getForecast(): void {
    this.forecastService.getForecast().subscribe((f) => this.items$ = of(f));
  }

}
