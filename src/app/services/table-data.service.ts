import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tableData } from '../interfaces/fixed-table-data-interfaces';
import { jsonData } from '../interfaces/back-data-interfaces';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private url = 'assets/data.json';
  constructor(private http: HttpClient) {}

  public receiveData(sectionName: string): Observable<tableData> {
    return this.http.get(this.url).pipe(
      map( data => this.formatData(data[sectionName])));
  }

  private formatData(limb: jsonData): tableData {
    let res = Object.assign(limb);

    Object.keys(res).map(
      elem => {
        typeof res[elem] === 'object' ?
          res[elem] = this.formatData(res[elem]) :
          res = Object.values(res);
      });

    return res;
  }
}
