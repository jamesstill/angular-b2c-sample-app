import { Injectable } from '@angular/core';
import { Forecast } from './forecast';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {

    public baseUrl = environment.apiConfig.uri;

    /*
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    */

    constructor(private http: HttpClient) { }

    getForecast(): Observable<Forecast[]> {

        console.log('baseUrl: ' + this.baseUrl);

        return this.http.get<Forecast[]>(`${this.baseUrl}/api/v1/weatherforecast`)
        .pipe(
            tap(data => console.log('getForecast: ' + JSON.stringify(data))),
            catchError(this.reportError<Forecast[]>('getForecast'))
          );     
    }

    private reportError<T>(operation = 'operation') {
        return (error: HttpErrorResponse): Observable<T> => {

            console.error(error); 

       
            const message = `server returned code ${error.status} with body "${error.error}"`;
            throw new Error(`${operation} failed: ${message}`);
        };
    }

}