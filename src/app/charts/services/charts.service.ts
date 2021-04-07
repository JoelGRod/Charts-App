import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { delay, map } from "rxjs/operators";

interface DoughnutResp {
  labels: string[];
  values: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private base_url: string = environment.base_url;

  constructor( private http: HttpClient ) { }

  get_users_rrss() {
    return this.http.get(`${this.base_url}grafica`);
  }

  get_users_rrss_doughnut() {
    return this.get_users_rrss()
      .pipe(
        delay(1500),
        map( resp => {
          const doughnut_resp: DoughnutResp = {
            labels: Object.keys(resp),
            values: Object.values(resp)
          };
          return doughnut_resp;
        })
      );
  }
}
