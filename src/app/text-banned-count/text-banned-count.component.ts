import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { HttpService } from '../app.service';

@Component({
  selector: 'app-text-banned-count',
  templateUrl: './text-banned-count.component.html',
  styleUrls: ['./text-banned-count.component.scss']
})
export class TextBannedCountComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  textBannedCount: any[];
  showChart = false;
  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet;
  doughnutChartType: ChartType;

  ngOnInit() {
    this.httpService.getTextBannedCount().subscribe(response => {
      this.textBannedCount = response;
      this.buildChart();
    });
  }

  private buildChart(): void {
    this.doughnutChartLabels = Object.keys(this.textBannedCount);
    this.doughnutChartData = Object.values(this.textBannedCount);
    this.doughnutChartType = 'doughnut';
    this.showChart = true;
  }

}
