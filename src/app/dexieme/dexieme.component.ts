import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dexieme',
  templateUrl: './dexieme.component.html',
  styleUrls: ['./dexieme.component.css']
})
export class DexiemeComponent implements OnInit {
@Input('tableau')t:string;
  constructor() { }

  ngOnInit(): void {
    
  }

}
