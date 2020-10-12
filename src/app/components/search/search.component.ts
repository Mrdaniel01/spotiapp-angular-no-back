import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  newArtists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) {}

  search( inputValue: string ){
    this.loading = true;
    this.spotify.getArtists(inputValue)
      .subscribe( (data: any) => {
        this.newArtists = data;
        this.loading = false;
      });
    }
}
