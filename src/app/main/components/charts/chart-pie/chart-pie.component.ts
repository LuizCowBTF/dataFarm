import { Component } from '@angular/core';

import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent {

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgba(255, 255, 255, 1)',
          font: {
            size: 14
          }
        } 
      }
    }
  };
  public pieChartLabels = [ 'Produtividade', 'Objetivo' ];
  public pieChartDatasets = [ {
    data: [ 70, 10 ],
    borderColor: 'rgba(79,1,119,1)',
    borderWidth: 2,
    backgroundColor: [
      'rgba(76,49,142,1)',
      'rgba(155,143,204,1)',
    ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }

}
