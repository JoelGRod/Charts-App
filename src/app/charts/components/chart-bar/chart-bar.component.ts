import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styles: [
  ]
})
export class ChartBarComponent implements OnInit {

  @Input() isHorizontal: boolean = false;
  @Input() barChartLabels: Label[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 10], label: 'Series A', backgroundColor: '#A041FA', hoverBackgroundColor: '#F6D55C' },
    // { data: [65, 59, 80, 81, 56, 55, 30], label: 'Series B', backgroundColor: '#613ADE', hoverBackgroundColor: '#F6D55C' },
    // { data: [65, 59, 80, 81, 56, 55, 50], label: 'Series C', backgroundColor: '#4C51F5', hoverBackgroundColor: '#F6D55C' },
    // { data: [65, 59, 80, 81, 56, 55, 70], label: 'Series D', backgroundColor: '#3A6ADE', hoverBackgroundColor: '#F6D55C' },
    // { data: [65, 59, 80, 81, 56, 55, 80], label: 'Series E', backgroundColor: '#41A9FA', hoverBackgroundColor: '#F6D55C' }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() { }

  ngOnInit(): void {
    if(this.isHorizontal) this.barChartType = 'horizontalBar';
  }

}
