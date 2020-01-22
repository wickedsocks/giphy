import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(
    private http: HttpClient
  ) { }

  searchForGifs(limit, query, offset?) {
    const params = new HttpParams()
    .set('limit', limit)
    .set('q', query)
    .set('offset', offset);
    return this.http.get(`https://api.giphy.com/v1/gifs/search?`, {params})
      .pipe(catchError(this.errorHander));
  }

  errorHander(err) {
    console.warn('Error thrown', err);
    return throwError(err);
  }
}
