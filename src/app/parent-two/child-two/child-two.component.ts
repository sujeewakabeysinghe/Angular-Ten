import { Component, OnInit, Output, EventEmitter } from '@angular/core';  //added output and event emitter for child to parent data transfer

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  name : any
  age : any

  @Output() xyz : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  sendData(data :any){
    this.xyz.emit(data)
  }

}
