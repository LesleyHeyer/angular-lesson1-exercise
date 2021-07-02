import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos:';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg';
  image3 = 'https://preview.redd.it/4cgqvqbj6u2y.jpg?width=640&crop=smart&auto=webp&s=e45485a3478b00e70d445b965782e00a4d7d75a6';

  constructor() { }

  ngOnInit() {
  }

}