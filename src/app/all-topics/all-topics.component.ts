import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app.service';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.scss']
})
export class AllTopicsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  topics: any[];
  showChart = false;
  pieChartOptions: ChartOptions;
  pieChartLabels: Label[];
  pieChartData: number[];
  pieChartType: ChartType;
  pieChartLegend: boolean;
  pieChartPlugins: any[];

  ngOnInit() {
    this.httpService.getCountTopics().subscribe(response => {
      this.topics = response;
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
    this.pieChartLabels = Object.keys(this.topics);
    this.pieChartData = Object.values(this.topics);
    this.pieChartType = 'pie';
    this.pieChartLegend = true;
    this.pieChartPlugins = [pluginDataLabels];
    this.showChart = true;
  }

}
