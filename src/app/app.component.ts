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
    console.log(newVinyl);
    this.allVinyls.push(newVinyl);
  }
}
