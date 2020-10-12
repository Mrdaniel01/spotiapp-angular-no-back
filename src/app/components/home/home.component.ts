import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;
  msgError: string;
  error = false;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.newSongs = data;
      this.loading = false;
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      console.log(errorService);
      this.msgError = errorService.error.error.message;
    });
  }
}
