import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';


interface ILocalStorageService {
  clear: () => void;
  delete: (key: string) => void;
  get<T>(key: string): T | void;
  save<T>(key: string, value: T): void;
}


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements ILocalStorageService {

  constructor(private loggingService: LoggingService) { }

  /**
   * Clear local storage data
   */
  public clear(): void {
    localStorage.clear();
    if (localStorage.length === 0) {
      this.loggingService.logState('cleared.');
    }
  }

  /**
   * Delete specified data point within local storage
   * @param key 
   * @returns 
   */
  public delete(key: string): void {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      this.loggingService.logState(key + ' successfully deleted.');
      return;
    }
    this.loggingService.logState('Unable to delete ' + key + '.');
  }

  /**
   * Get specified data type from local storage
   * @param key 
   * @returns 
   */
  public get<T>(key: string): T | void {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) as string);
    }
    this.loggingService.logState('Unable to retrieve ' + key + '.');
  }

  /**
   * Save data to local storage
   * @param key 
   * @param value 
   */
  public save<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
    if (localStorage.getItem(key)) {
      this.loggingService.logState(key + ' successfully saved.');
    }
  }
}
