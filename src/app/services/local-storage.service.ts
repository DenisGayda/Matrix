import { Injectable } from '@angular/core';

export interface ILocalStorageItem {
  id: number;
  value: string;
}

const localStorageName = 'matrix-LS';

@Injectable({
  providedIn: 'root',
})

export class LocalStorageService {

  public idKey = Date.now();
  public localStorageArray = [];

  getLocalStorage() {
    return this.localStorageArray;
  }

  updateLocalStorage() {
    localStorage.setItem(localStorageName, JSON.stringify(this.localStorageArray));

    return this.getLocalStorage();
  }

  addItemToLocalStorage(id) {
    this.localStorageArray = [];
    this.localStorageArray[0] = {...this.localStorageArray, id};

    return this.updateLocalStorage();
  }

}
