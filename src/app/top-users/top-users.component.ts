import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app.service';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.scss']
})
export class TopUsersComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  countByPlayer: any[];
  showChart = false;
  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet;
  doughnutChartType: ChartType;

  ngOnInit() {
    this.httpService.getCountyByPlayer().subscribe(response => {
      this.countByPlayer = response;
      this.buildChart();
    });
  }

  private buildChart(): void {
    this.doughnutChartLabels = Object.keys(this.countByPlayer);
    this.doughnutChartData = Object.values(this.countByPlayer);
    this.doughnutChartType = 'doughnut';
    this.showChart = true;
  }

}
