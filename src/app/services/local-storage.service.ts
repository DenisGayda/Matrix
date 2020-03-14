import { Injectable } from '@angular/core';

export interface ILocalStorageItemInterface {
  id: number;
  value: string;
}

@Injectable({
  providedIn: 'root',
})

export class LocalStorageService {

  public idKey: number = Date.now();
  private localStorageName = 'matrix-local-storage';
  private localStorageArray: ILocalStorageItemInterface[] = [];

  public getLocalStorage() {
    return JSON.parse(localStorage.getItem(this.localStorageName));
  }

  public updateLocalStorage() {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.localStorageArray));

    return this.getLocalStorage();
  }

  public addItemToLocalStorage(item: ILocalStorageItemInterface) {
    this.localStorageArray = [...this.localStorageArray, item];

    return this.updateLocalStorage();
  }

}
