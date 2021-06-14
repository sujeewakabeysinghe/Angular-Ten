import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  myColor = 'green'
  condition = true
  conditionTwo = true
  colorOne = 'cornflowerblue'
  colorTwo = 'red'

  change(){
    this.myColor = 'cornflowerblue'
  }

  changeTwo(){
    this.condition=!this.condition
  }

  changeThree(){
    this.conditionTwo=!this.conditionTwo
  }

  constructor() { }

  ngOnInit(): void {
  }

}
