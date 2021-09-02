import { Injectable } from '@angular/core';

interface ILoggingService {
  clog: (name: string, msg: string) => void;
  log: (data: any) => void;
  logState: (msg: string) => void;
  statusChange: (status: string) => void;
};


@Injectable({
  providedIn: 'root'
})
export class LoggingService implements ILoggingService {

  constructor() { }

  /**
   * Logs to console
   * @param name - name of message
   * @param msg  - string message
   */
  public clog(name: string, msg: string): void {
    console.log(name + ': ' + msg);
  }

  /**
   * Logs to console
   * @param data 
   */
  public log(data: any): void {
    console.log(data);
  };

  /**
   * Logs state changes to console
   * @param msg 
   */
  public logState(msg: string): void {
    console.log('State: ' + msg);
  }

  /**
   * Console logs when the server status has changed
   * @param status 
   */
  public statusChange(status: string): void {
    console.log('Server status change detected: ' + status);
  };
};
