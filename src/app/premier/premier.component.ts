import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent implements OnInit {
tab= ["Amir", "Mouna", "Skander", "Siwar"];
  constructor() { }

  ngOnInit(): void {

  }

}
