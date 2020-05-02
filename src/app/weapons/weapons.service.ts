import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/constants';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ServiceClass } from '../interfaces/service.interface';
import { IWeapon } from './interfaces/weapons';
import { ICompletedWeapon } from './interfaces/completed-weapon';
//import { WeaponsModule } from './weapons.module';

@Injectable({
    //providedIn: WeaponsModule
    providedIn: 'root'
})
export class WeaponService extends ServiceClass {

    constructor(private http: HttpClient, private url: Constants) {
        super();
    }

    // Gets all weapons
    getWeapons(): Observable<IWeapon[]> {
        return this.http.get<IWeapon[]>(`${this.url.API_ENDPOINT}/weapons`)
        .pipe(
          tap(data => console.log('All: '
           //+ JSON.stringify(data)
           )),
          catchError(this.handleError)
        );
    }

    // Gets all weapons
    getWeaponById(id: number): Observable<IWeapon> {
        return this.http.get<IWeapon>(`${this.url.API_ENDPOINT}/weapons/${id}`)
        .pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    // Gets all weapons
    getCompleteWeaponInfoById(id: number): Observable<ICompletedWeapon> {
        return this.http.get<ICompletedWeapon>(`${this.url.API_ENDPOINT}/completedweapons/${id}`)
        .pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }
}