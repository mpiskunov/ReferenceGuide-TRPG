import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Constants } from '../config/constants';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ServiceClass } from '../interfaces/service.interface';

@Injectable({
    providedIn: 'root'
})
export class WeaponService extends ServiceClass {

    constructor(private http: HttpClient, private url: Constants) {
        super();
    }

    // Gets all weapons
    getWeapons(): Observable<[]> {
        return this.http.get<[]>(this.url.API_ENDPOINT + "/weapons")
        .pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }
}