import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent implements OnInit {

  name = "Sujeewa!"
  dis = true

  disThis(){
    this.dis = !this.dis
  }

  constructor() { }

  ngOnInit(): void {
  }

}
