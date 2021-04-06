import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-bars-double-page',
  templateUrl: './bars-double-page.component.html',
  styles: [
  ]
})
export class BarsDoublePageComponent implements OnInit {

  sellersData: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Seller A' },
    { data: [ 50,250,30, 450,200 ], label: 'Seller B' },
  ];
  
  yearLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  productData: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Cars', backgroundColor: 'blue' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
