import { Component, OnInit, Input } from '@angular/core';  //added the input decorator

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myData: any
  @Input() myDataTwo : any

  name : any
  age : any

  constructor() { }

  ngOnInit(): void {
    this.name = this.myDataTwo.name
    this.age = this.myDataTwo.age
  }

}
