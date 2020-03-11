import { Injectable } from '@angular/core';
import  *  as  data  from  './data.json';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  public dataBase = data;
  console.log(database);
  constructor() { }
}
