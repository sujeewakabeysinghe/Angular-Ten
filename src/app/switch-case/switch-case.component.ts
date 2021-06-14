import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {

  color: string = ''

  red(){
    this.color='red'
  }

  green(){
    this.color='green'
  }

  yellow(){
    this.color='yellow'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
