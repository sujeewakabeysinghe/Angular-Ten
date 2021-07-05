import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; //import this for to create reactive forms

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
