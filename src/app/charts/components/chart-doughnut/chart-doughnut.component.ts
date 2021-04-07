import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styles: [
  ]
})
export class ChartDoughnutComponent {

  // Doughnut
  @Input() doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  @Input() doughnutChartData: MultiDataSet = [
    // [350, 450, 100]
  ];
  @Input() colors: Color[] = [
    // {
    //   backgroundColor: [
    //     '#8E33F2',
    //     '#5E35FC',
    //     '#3B46E6',
    //     '#3577FC',
    //     '#33A4F2',
    //   ]
    // }
  ];

  public doughnutChartType: ChartType = 'doughnut';

}
