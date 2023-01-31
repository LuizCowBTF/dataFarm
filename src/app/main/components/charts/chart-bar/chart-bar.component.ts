import { Component } from '@angular/core';

import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent {

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { 
        data: [ 65, 59, 80, 81, 56, 55, 40 ], 
        label: 'Chuvas',
        borderColor: 'rgba(79,1,119,1)',
        borderWidth: 2,
        backgroundColor: 'rgba(76,49,142,1)',
      },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
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
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  constructor() {
  }


}
