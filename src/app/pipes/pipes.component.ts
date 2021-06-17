import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name = 'Sujeewa abeYsinghe'
  date = Date.now()
  currency = 100

  constructor() { }

  ngOnInit(): void {
  }

}
