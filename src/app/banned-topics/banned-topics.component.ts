import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { HttpService } from '../app.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-banned-topics',
  templateUrl: './banned-topics.component.html',
  styleUrls: ['./banned-topics.component.scss']
})
export class BannedTopicsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  topicsBannedCount: any[];
  showChart = false;
  pieChartOptions: ChartOptions;
  pieChartLabels: Label[];
  pieChartData: number[];
  pieChartType: ChartType;
  pieChartLegend: boolean;
  pieChartPlugins: any[];

  ngOnInit() {
    this.httpService.getTopicsBannedCount().subscribe(response => {
      this.topicsBannedCount = response;
      this.buildChart();
    });
  }

  private buildChart(): void {
    this.pieChartOptions = {
      responsive: true,
      legend: {
        position: 'top',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          },
        },
      }
    };
    this.pieChartLabels = Object.keys(this.topicsBannedCount);
    this.pieChartData = Object.values(this.topicsBannedCount);
    this.pieChartType = 'pie';
    this.pieChartLegend = true;
    this.pieChartPlugins = [pluginDataLabels];
    this.showChart = true;
  }

}
