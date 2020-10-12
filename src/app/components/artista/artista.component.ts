import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe (params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string){
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe( artist => {
        this.loading = false;
        this.artist = artist;
      });
  }

  getTopTracks( id: string ){
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks)
        this.topTracks = topTracks;
      });
  }

}
