import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  title: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    .my-pointer {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent  {

  public menu: MenuItem[] = [
    {route: 'charts/bars', title: 'Bars'},
    {route: 'charts/bars-double', title: 'Double Bars'},
    {route: 'charts/doughnut', title: 'Doughnut'},
    {route: 'charts/doughnut-http', title: 'Doughnut HTTP'},
  ]

  

}
