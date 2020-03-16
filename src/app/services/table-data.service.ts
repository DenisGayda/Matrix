import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tableData } from '../interfaces/fixed-table-data-interfaces';
import { formatData } from '../../assets/formatData';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private url = 'assets/data.json';
  constructor(private http: HttpClient) {}

  public receiveData(sectionName: string): Observable<tableData> {
    return this.http.get(this.url).pipe(
      map( data => formatData(data[sectionName])));
  }
}
