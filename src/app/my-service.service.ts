import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  myData(){
    return {
      name : 'Sujeewa',
      age : 26
    }
  }

}
