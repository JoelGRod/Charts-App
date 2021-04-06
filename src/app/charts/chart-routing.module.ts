import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components - Pages
import { BarsDoublePageComponent } from './pages/bars-double-page/bars-double-page.component';
import { BarsPageComponent } from './pages/bars-page/bars-page.component';
import { DoughnutHttpPageComponent } from './pages/doughnut-http-page/doughnut-http-page.component';
import { DoughnutPageComponent } from './pages/doughnut-page/doughnut-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bars', component: BarsPageComponent },
      { path: 'bars-double', component: BarsDoublePageComponent },
      { path: 'doughnut', component: DoughnutPageComponent },
      { path: 'doughnut-http', component: DoughnutHttpPageComponent },
      { path: '**', redirectTo: 'bars' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChartRoutingModule { }
