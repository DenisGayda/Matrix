import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {

  public url = 'assets/data.json';
  public data;

  constructor(private http: HttpClient) {
    //this.data = this.http.get(this.url)
    // Object.defineProperty(this.data,'skills',{
    //   enumerable: false,
    //   configurable: false,
    //   writable: false,
    //   value: 'someval'
    // })
  }


  receiveData() {
    return Object.defineProperty(this.http.get(this.url), 'skills', {
      enumerable: false,
      configurable:true,
      writable:true,
      value:{'level':147}
    })
    }

}
