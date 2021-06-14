import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  colors = [
    'Red',
    'Green',
    'Yellow'
  ]

  data = [
    { name: 'Sujeewa', age: 26 },
    { name: 'Praween', age: 23 },
    { name: 'Kasun', age: 25 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
