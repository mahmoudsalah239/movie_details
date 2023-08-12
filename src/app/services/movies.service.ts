import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient;
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) {}
  gettrending(mediatype: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=70d82f63e366d8b96c1b6de3f9783498`
    );
  }
  getMovieById(id: any): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=70d82f63e366d8b96c1b6de3f9783498&languag=en-US`
    );
  }
}
