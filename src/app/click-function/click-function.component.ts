import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-function',
  templateUrl: './click-function.component.html',
  styleUrls: ['./click-function.component.css']
})
export class ClickFunctionComponent implements OnInit {

  hello(){
    alert('Hello Angular!')
  }

  helloTwo(name:string){
    alert(name)
  }

  nameTwo='Abeysinghe'

  constructor() { }

  ngOnInit(): void {
  }

}
