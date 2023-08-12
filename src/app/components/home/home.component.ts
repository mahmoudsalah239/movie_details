import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  moviesData: any[] = [];
  tvData: any[] = [];
  peopleData: any[] = [];
  imgprefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this._MoviesService.gettrending('movie').subscribe((data) => {
      this.moviesData = data.results;
    });
    this._MoviesService.gettrending('tv').subscribe((data) => {
      this.tvData = data.results;
    });
    // this._MoviesService.gettrending('people').subscribe((data) => {
    //   this.peopleData = data.results;
    // });
  }
}
