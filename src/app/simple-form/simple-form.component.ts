import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  get(vales : any){
    console.log(vales)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
