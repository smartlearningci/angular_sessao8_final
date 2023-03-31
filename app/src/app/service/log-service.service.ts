import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {


  constructor() { }

  public msgs : string[] = [];

  public log(componente: string, msg: string ){

    this.msgs.push(componente + " >>>> " + msg);
    return console.log(componente + " >>>> " + msg);
    
  }

  public limpar(){
    this.msgs = [];
  }
}