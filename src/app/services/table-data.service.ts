import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {

  public url = 'assets/data.json';
  constructor(private http: HttpClient) {
    this.getData('test');
  }
  getData(sectionName) {
    this.http.get(this.url).subscribe(
      data => {
        console.log(data[sectionName]);
      }
    );
  }
}
