import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
tab= ["Amir", "Mouna", "Skander", "Siwar"];
  constructor() { }
  gettab(){
return this.tab;
  }
  suprrimer(){
    this.tab.shift();
  }
}
