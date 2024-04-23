import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Series> = [];
  averageSeasons = 0;
  
  constructor() { }
  getSeriesList(): Array<Series> {
    return dataSeries;
  }

  ngOnInit() {
    this.series = this.getSeriesList();
    const totalSeasons = this.series.reduce((acc, curr) => acc + curr.seasons, 0);
    const averageSeasons = totalSeasons / this.series.length;
    this.averageSeasons = averageSeasons;
  }

}
