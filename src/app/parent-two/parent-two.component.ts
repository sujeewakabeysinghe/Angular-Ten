import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit {

  name :any
  age : any

  constructor() { }

  ngOnInit(): void {
  }

  myFunction(data :any){
    this.name = data.name
    this.age = data.age
  }

}
