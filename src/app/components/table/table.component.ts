import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private url = 'assets/data.json';
  constructor(private http: HttpClient) {}

  public receiveData(sectionName: string): Observable<any> {
    return this.http.get(this.url).pipe(
      map( data => this.formatData(data[sectionName])));
  }

  private formatData(limb) {
    let res = JSON.parse(JSON.stringify(limb));

    Object.keys(res).map(
      elem => {
        if (typeof res[elem] === 'object') {
          res[elem] = this.formatData(res[elem]);
        } else {
          res = Object.values(res);
        }
      });
    return res;
  }
}
