import { Component } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Controle de PRAGAS',
        fill: true,
        tension: 0.1,
        borderColor: 'rgba(79,1,119,1)',
        borderWidth: 2,
        backgroundColor: 'rgba(76,49,142,1)',
        pointBackgroundColor: 'rgba(155,143,204,1)',
        pointRadius: 3
      }      
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
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
    }
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }


}
