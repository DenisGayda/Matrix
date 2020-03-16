import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LocalStorageService {
  public getValue<T>(key: string): T[] {
    const value = localStorage.getItem(key);

    return !!value ? JSON.parse(value) : [];
  }

  public setValue<T>(key: string, value: T[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
