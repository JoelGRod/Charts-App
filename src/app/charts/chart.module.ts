import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { ChartsModule } from "ng2-charts";
import { ChartRoutingModule } from './chart-routing.module';
// Components - Pages
import { BarsPageComponent } from './pages/bars-page/bars-page.component';
import { BarsDoublePageComponent } from './pages/bars-double-page/bars-double-page.component';
import { DoughnutPageComponent } from './pages/doughnut-page/doughnut-page.component';
import { DoughnutHttpPageComponent } from './pages/doughnut-http-page/doughnut-http-page.component';
// Components
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';


@NgModule({
  declarations: [
    // Pages
    BarsPageComponent, 
    BarsDoublePageComponent, 
    DoughnutPageComponent, 
    DoughnutHttpPageComponent, 
    // Components
    ChartBarComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule
  ]
})
export class ChartModule { }
