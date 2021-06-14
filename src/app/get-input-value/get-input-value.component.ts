import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-input-value',
  templateUrl: './get-input-value.component.html',
  styleUrls: ['./get-input-value.component.css']
})
export class GetInputValueComponent implements OnInit {

  name : any

  get(value: any){
    this.name = value.value
    console.warn(this.name)
  }

  getTwo(value: any){
    console.warn(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
