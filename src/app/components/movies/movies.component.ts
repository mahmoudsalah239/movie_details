import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  homemovies: any[] = [];
  imgprefix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.gettrending('movie').subscribe((data) => {
      this.homemovies = data.results;
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
