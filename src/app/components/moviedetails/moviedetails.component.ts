import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {
  routeId: any = '';
  findMovie: any = {};
  imgprefix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.routeId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this._MoviesService.getMovieById(this.routeId).subscribe((res) => {
      this.findMovie = res;
      console.log(this.findMovie);
    });
  }
  goBack() {
    this.location.back();
  }
}
