import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio funcionando');
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBNv5Ju6RzTKmTzhSWNq9tN5NCkgLzCe9Mo9jX1JPhjBNNMruGE5CDw9peNa7U7Kwti_O8STq_KtagpP2g'
    });

    return this.http.get(url, {headers})

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items));
  }

  getArtists( inputValue: string, ) {
    return this.getQuery(`search?q=${inputValue}&type=artist`)
      .pipe( map( data => data['artists'].items));
  }

  getArtist( id: string, ) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string, ) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe ( map (data => data['tracks']));
  }
}
