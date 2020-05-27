import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Constants } from '../../config/constants';
import { tap, catchError } from 'rxjs/operators';
import { ApiEndPoint } from './api-endpoint';

@Injectable({
  providedIn: 'root',
})
export class WitcherApiService {
  constructor(private http: HttpClient, private url: Constants) {}

  // Gets all weapons
  getAll<T>(endPoint: ApiEndPoint): Observable<T> {
    return this.http.get<T>(`${this.url.API_ENDPOINT}/${endPoint}`).pipe(
      tap((data) => {
        // console.log(
        //   'All: '
        //   //+ JSON.stringify(data)
        // )
      }),
      catchError(this.handleError)
    );
  }

  // Gets all weapons
  getSingularById<T>(endPoint: ApiEndPoint, id: number): Observable<T> {
    return this.http.get<T>(`${this.url.API_ENDPOINT}/${endPoint}/${id}`).pipe(
      tap((data) => {
        //console.log('All: ' + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  public handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
