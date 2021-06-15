import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //parentData = 'Parent Data!'

  /*parentData = {
    name : 'Sujeewa',
    age : 26
  }*/

  parentData = [
    {name : 'sujee', age : 26},
    {name : 'max', age : 23},
  ]

  parentObject = {
    name : 'Sujeewa',
    age : 26
  }

  constructor() { }

  ngOnInit(): void {
  }

}
