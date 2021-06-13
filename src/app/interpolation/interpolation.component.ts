import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name = 'Interpolation!'

  hey(){
    return 'Hey!'
  }

  nameTwo = 'Interpolation Two!'

  heyTwo(){
    return this.nameTwo;
  }
  
  object = {
    nameThree : 'Interpolation Three!',
    age : 26
  }

  array = [
    'Interpolation Four!',
    'Interpolation Five!',
    'Interpolation Six!'
  ]

  siteURL = window.location.href

  constructor() { }

  ngOnInit(): void {
  }

}
