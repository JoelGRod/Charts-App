import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'charts',
    loadChildren: () => import('./charts/chart.module').then( m => m.ChartModule )
  },
  { path: '**', redirectTo: 'charts' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
