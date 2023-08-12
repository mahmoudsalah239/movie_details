import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  homemovies: any[] = [];
  imgprefix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.gettrending('tv').subscribe((data) => {
      this.homemovies = data.results;
      console.log(this.homemovies);
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };
}
