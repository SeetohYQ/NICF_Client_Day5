import { Component } from '@angular/core';
import { Vinyl } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5assessment';
  allVinyls: Vinyl[];
  shareable: boolean = false;

  ngOnInit() {
    this.allVinyls = [
      {
        albumName: 'Meteora',
        artist: 'Linking Park',
        rating: 9,
        coverImageUrl: '/assets/linkingpark_meteora.jpg'
      },
      {
        albumName: 'A Thousand Suns',
        artist: 'Linking Park',
        rating: 8,
        coverImageUrl: '/assets/vinyl.jpg'
      },
    ]
  }

  addNewVinyl(newVinyl: Vinyl){
    this.allVinyls.push(newVinyl);
    this.allVinyls.sort((
      (a: Vinyl, b: Vinyl) => {
        return a.artist.localeCompare(b.artist);
      }
    ))
  }

  shareTheApp() {
    navigator['share']({
      title: 'Vinyl/LP Collection',
      text: 'Manage your vintage collection',
      url: 'https://developers.google.com/web',
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
  }
}
