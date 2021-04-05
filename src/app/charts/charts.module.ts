import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsPageComponent } from './pages/bars-page/bars-page.component';
import { BarsDoublePageComponent } from './pages/bars-double-page/bars-double-page.component';
import { DoughnutPageComponent } from './pages/doughnut-page/doughnut-page.component';
import { DoughnutHttpPageComponent } from './pages/doughnut-http-page/doughnut-http-page.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';


@NgModule({
  declarations: [BarsPageComponent, BarsDoublePageComponent, DoughnutPageComponent, DoughnutHttpPageComponent, ChartBarComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
