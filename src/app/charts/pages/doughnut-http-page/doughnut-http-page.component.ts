import { Component, OnInit } from '@angular/core';
import { Color, MultiDataSet } from 'ng2-charts';
// Services
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-doughnut-http-page',
  templateUrl: './doughnut-http-page.component.html',
  styles: [
  ]
})
export class DoughnutHttpPageComponent implements OnInit {

  // Doughnut
  public testLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public testChartData: MultiDataSet = [
    // [350, 450, 100]
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

  constructor(private charts_service: ChartsService) { }

  ngOnInit(): void {
    this.charts_service.get_users_rrss_doughnut()
    .subscribe( resp => {
      this.testLabels = resp.labels;
      this.testChartData.push(resp.values);
    })
  }

}
