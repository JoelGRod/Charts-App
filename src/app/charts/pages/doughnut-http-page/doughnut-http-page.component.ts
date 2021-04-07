import { Component, OnInit } from '@angular/core';
import { Color, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-http-page',
  templateUrl: './doughnut-http-page.component.html',
  styles: [
  ]
})
export class DoughnutHttpPageComponent implements OnInit {

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
        '#33A4F2',
        '#3577FC'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
