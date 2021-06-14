import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-statement',
  templateUrl: './conditional-statement.component.html',
  styleUrls: ['./conditional-statement.component.css']
})
export class ConditionalStatementComponent implements OnInit {

  show=true

  change(){
    this.show=!this.show
  }

  showTwo=true

  changeTwo(){
    this.showTwo=!this.showTwo
  }

  showThree='yes'

  changeThree(){
    this.showThree='no'
  }

  showFour='yes'

  changeFour(){
    this.showFour='no'
  }

  color='yellow'

  constructor() { }

  ngOnInit(): void {
  }

}
