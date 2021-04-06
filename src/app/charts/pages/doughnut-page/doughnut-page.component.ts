import { Component, OnInit } from '@angular/core';
import { Color, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-page',
  templateUrl: './doughnut-page.component.html',
  styles: [
  ]
})
export class DoughnutPageComponent implements OnInit {

  // Doughnut
  public testLabels: string[] = [
    'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public testChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public colors: Color[] = [
    {
      backgroundColor: [
        '#8E33F2',
        '#5E35FC',
        '#3B46E6',
        '#3577FC',
        '#33A4F2',
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
